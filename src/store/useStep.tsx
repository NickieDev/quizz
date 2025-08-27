import { create } from "zustand";

type Step = {
   step: number
   nextStep: () => number
   prevStep: () => number
}

export const useStep = create<Step>((set, get) => ({
   step: 0,

   nextStep: () => {
      const next = get().step + 1

      set({ step: next })

      return next
   },

   prevStep: () => {
      const prev = get().step - 1

      set({ step: prev })

      return prev
   },
}))