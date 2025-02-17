import React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold text-center text-white mb-8">
      {children}
    </h1>
  );
} 