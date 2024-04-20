import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type {} from "@redux-devtools/extension";

export const VALUE = 1;

interface CounterStore {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const useCounter = create<CounterStore>()(
  devtools(
    immer((set) => ({
      count: 0,
      onIncrease: () => {
        set((state) => ({ count: state.count + VALUE }));
      },
      onDecrease: () => {
        set((state) => ({ count: state.count - VALUE }));
      },
    })),
    {
      name: "COUNTER",
      // enabled: process.env.NODE_ENV !== "production",
    }
  )
);
