
import { Answers } from "./answers"
import { User } from "./user"

export type UserAnswer = {
   id: number | string
   userAnswers: {
      user: Omit<User, 'setName' | 'setEmail'>
      answers: Answers
      score: number,
      classification: 'Fit Altíssimo' | 'Fit Aprovado' | 'Fit Questionável' | 'Fit Fora do Perfil'
      createdAt: Date
   }
}
