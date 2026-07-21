"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Hydration-safe "has the client mounted yet" flag, for UI that depends on
// browser-only state (e.g. resolved theme) that can't match the SSR output.
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
