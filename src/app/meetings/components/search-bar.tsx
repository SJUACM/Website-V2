"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search meetings...",
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search input to avoid excessive filtering
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  useEffect(() => {
    debouncedSearch(inputValue);
    // Cleanup function to cancel debounce on unmount
    return () => debouncedSearch.cancel();
  }, [inputValue, debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto mb-8 border border-1 border-gray-200/20 rounded-lg"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        className={`relative rounded-lg transition-shadow duration-300 ${
          isFocused
            ? "shadow-md ring-2 ring-red-500/30 dark:ring-red-500/20"
            : "shadow-sm hover:shadow"
        }`}
      >
        <motion.div
          className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
          animate={{
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? "#ef4444" : "#9ca3af",
          }}
          transition={{ duration: 0.2 }}
        >
          <Search className="h-4 w-4" />
        </motion.div>

        <Input
          type="text"
          placeholder={placeholder}
          className="pl-10 pr-10 w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <AnimatePresence>
          {inputValue && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-y-0 right-0 px-3 flex items-center"
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full hover:bg-red-50 dark:hover:bg-red-950/20"
                onClick={handleClear}
                type="button"
              >
                <X className="h-3 w-3 text-gray-400 hover:text-red-500" />
                <span className="sr-only">Clear search</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// Debounce helper function
function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
  };

  return debounced;
}
