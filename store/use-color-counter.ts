import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type {} from "@redux-devtools/extension";

export const COLOR_VALUE = 15;

export enum COLOR_ENUM {
  GREEN = "green",
  RED = "red",
  BLUE = "blue",
}

type ColorType = `${COLOR_ENUM}`;

interface OnActionProps {
  color: ColorType;
}

interface ColorCounterStore {
  green: number;
  red: number;
  blue: number;
  onIncrease: ({ color }: OnActionProps) => void;
  onDecrease: ({ color }: OnActionProps) => void;
}

export const useColorCounter = create<ColorCounterStore>()(
  devtools(
    immer((set) => ({
      green: 0,
      red: 0,
      blue: 0,
      onIncrease: (obj) => {
        const { color } = obj;

        set((state) => {
          const updatedValue = state[color] + COLOR_VALUE;
          state[color] = updatedValue >= 255 ? 255 : updatedValue;
        });
      },
      onDecrease: (obj) => {
        const { color } = obj;

        set((state) => {
          const updatedValue = state[color] - COLOR_VALUE;
          state[color] = updatedValue <= 0 ? 0 : updatedValue;
        });
      },
    })),
    {
      name: "COLOR_COUNTER",
      // enabled: process.env.NODE_ENV !== "production",
    }
  )
);
