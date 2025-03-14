"use client";

import { trackEvent } from "./posthog";

/**
 * Automatically track all button clicks in the application
 * This function sets up a MutationObserver to track clicks on buttons
 * that are added to the DOM after the initial page load
 */
export function setupButtonClickTracking() {
  if (typeof window === "undefined") return;

  // Function to add click event listeners to buttons
  const addClickListeners = (
    elements:
      | HTMLButtonElement
      | HTMLButtonElement[]
      | NodeListOf<HTMLButtonElement>
  ) => {
    // Convert to array if it's a single element or NodeList
    const buttonsArray =
      elements instanceof HTMLButtonElement ? [elements] : Array.from(elements);

    buttonsArray.forEach(button => {
      // Skip if we've already added tracking to this button
      if (button.dataset.trackingAdded) return;

      // Mark the button as having tracking added
      button.dataset.trackingAdded = "true";

      // Add click event listener
      button.addEventListener("click", () => {
        // Get button text or fallback to a description
        const buttonText =
          button.textContent?.trim() ||
          button.getAttribute("aria-label") ||
          "Unknown Button";

        // Get button type if available
        const buttonType = button.type || "button";

        // Get button variant from class if using shadcn UI
        let buttonVariant = "default";
        if (button.className) {
          if (button.className.includes("destructive"))
            buttonVariant = "destructive";
          else if (button.className.includes("outline"))
            buttonVariant = "outline";
          else if (button.className.includes("secondary"))
            buttonVariant = "secondary";
          else if (button.className.includes("ghost")) buttonVariant = "ghost";
          else if (button.className.includes("link")) buttonVariant = "link";
        }

        // Track the button click
        trackEvent("button_click", {
          button_text: buttonText,
          button_type: buttonType,
          button_variant: buttonVariant,
          button_id: button.id || undefined,
          button_name: button.name || undefined,
          button_disabled: button.disabled,
          path: window.location.pathname,
          url: window.location.href,
        });
      });
    });
  };

  // Add click listeners to all existing buttons
  const existingButtons =
    document.querySelectorAll<HTMLButtonElement>("button");
  addClickListeners(existingButtons);

  // Set up a MutationObserver to track new buttons added to the DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // Check for new nodes added
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          // Check if the node is an element
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the node is a button
            if ((node as Element).tagName === "BUTTON") {
              addClickListeners(node as HTMLButtonElement);
            }

            // Check for buttons inside the added node
            const childButtons = (
              node as Element
            ).querySelectorAll<HTMLButtonElement>("button");
            if (childButtons.length) {
              addClickListeners(childButtons);
            }
          }
        });
      }
    });
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Return a cleanup function
  return () => {
    observer.disconnect();
  };
}
