import { cultureQuestions, energyQuestions, performanceQuestions } from "./questions"
import { Answers } from "@/types/answers"
import { sumBlockQuestions } from "./sum-block-question"

export const sumScore = (answers: Answers) => {
   const questionnLenght = performanceQuestions.length + energyQuestions.length + cultureQuestions.length

   const performanceScore = sumBlockQuestions(performanceQuestions, answers)
   const energyScore = sumBlockQuestions(energyQuestions, answers)
   const cultureScore = sumBlockQuestions(cultureQuestions, answers)

   const score = (performanceScore + energyScore + cultureScore) / questionnLenght

   return score
}