import { Answers } from "@/types/answers";
import { create } from "zustand";

type AnswersResponse = {
   answers: Answers
   setAnswers: (answers: Answers) => void
}

export const useAnswers = create<AnswersResponse>((set) => ({
   answers: {
      experience: "",
      deliverables: "",
      skills: "",

      availability: "",
      deadlines: "",
      pressure: "",

      values: "",
      collaboration: "",
      adaptation: "",
      communication: "",
   },

   setAnswers: (answers) => set({ answers }),
}));