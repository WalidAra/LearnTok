// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function NextUI({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
