'use client'

import { create } from "zustand"
import { useUser } from "./useUser"
import { useAnswers } from "./useAnswers"
import { UserAnswer } from "@/types/user-answers"

type UserAnswersState = UserAnswer & {
   setUserAnswers: (userAnswers: UserAnswer) => void
}

export const useUserAnswers = create<UserAnswersState>((set, get) => ({
   id: '',
   userAnswers:
   {
      user: {
         name: '',
         email: '',
      },
      answers: {
         experience: '',
         deliverables: '',
         skills: '',

         availability: '',
         deadlines: '',
         pressure: '',

         values: '',
         collaboration: '',
         adaptation: '',
         communication: ''
      },
      score: 0,
      classification: 'Fit Fora do Perfil',
      createdAt: new Date()
   }
   , // Provide a default value for userAnswers if required by your UserAnswer typ,
   setUserAnswers: (userAnswers: UserAnswer) => set({ ...userAnswers }),
   score: 0,
   createdAt: new Date()
}))