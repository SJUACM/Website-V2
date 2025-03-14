# PostHog Tracking Implementation

This document outlines how button click tracking is implemented in the STJ ACM website using PostHog.

## Overview

We've implemented automatic button click tracking throughout the application using PostHog. This allows us to track user interactions with buttons and gather analytics data to improve the user experience.

## Implementation Details

### 1. Automatic Button Click Tracking

All button clicks are automatically tracked using a MutationObserver that monitors the DOM for new buttons and adds click event listeners to them. This is implemented in:

- `src/app/utils/trackButtonClicks.ts` - Contains the core functionality for tracking button clicks
- `src/app/providers/button-tracking-provider.tsx` - Provider component that initializes the tracking

The automatic tracking captures the following data for each button click:

- Button text
- Button type
- Button variant (based on Shadcn UI classes)
- Button ID and name (if available)
- Button disabled state
- Current page path and URL

### 2. Manual Button Click Tracking

For more specific tracking needs, we've created:

- `src/components/ui/tracked-button.tsx` - A button component that extends the Shadcn UI Button with tracking capabilities
- `src/app/hooks/useTrackedButton.ts` - A custom hook for tracking button clicks in components
- `src/app/utils/withTracking.tsx` - A higher-order component for adding tracking to any component

### 3. Usage Examples

#### Using the TrackedButton component:

```tsx
import { TrackedButton } from "@/components/ui/tracked-button";

function MyComponent() {
  return (
    <TrackedButton
      trackingEvent="custom_button_click"
      trackingProperties={{ location: "header", action: "download" }}
    >
      Download
    </TrackedButton>
  );
}
```

#### Using the useTrackedButton hook:

```tsx
import { useTrackedButton } from "@/app/hooks/useTrackedButton";

function MyComponent() {
  const { createClickHandler } = useTrackedButton();

  return (
    <button
      onClick={createClickHandler("custom_button_click", {
        location: "footer",
        action: "contact",
      })}
    >
      Contact Us
    </button>
  );
}
```

#### Using the withTracking HOC:

```tsx
import { Button } from "@/components/ui/button";
import { withTracking } from "@/app/utils/withTracking";

const TrackedButton = withTracking(Button, "custom_button_click");

function MyComponent() {
  return (
    <TrackedButton
      trackingProperties={{ location: "sidebar", action: "navigate" }}
    >
      Go to Dashboard
    </TrackedButton>
  );
}
```

## Event Naming Conventions

We use the following naming conventions for tracking events:

- `button_click` - Default event name for automatic button tracking
- `[component]_button_click` - For component-specific button clicks (e.g., `navbar_button_click`)
- `[action]_button_click` - For action-specific button clicks (e.g., `signup_button_click`)

## Properties

Common properties included with button click events:

- `button_text` - The text content of the button
- `button_location` - Where the button is located in the UI
- `button_action` - What action the button performs
- `path` - The current page path
- `url` - The full URL

## Viewing Analytics

You can view the tracked events in the PostHog dashboard. The events will appear under the event names mentioned above.
