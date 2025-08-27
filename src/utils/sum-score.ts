import { cultureQuestions, energyQuestions, performanceQuestions } from "./questions"
import { Answers } from "@/types/answers"
import { sumBlockQuestions } from "./sum-block-question"

export const sumScore = (answers: Answers) => {
   const questionnLenght = performanceQuestions.length + energyQuestions.length + cultureQuestions.length

   let performanceScore = sumBlockQuestions(performanceQuestions, answers)
   let energyScore = sumBlockQuestions(energyQuestions, answers)
   let cultureScore = sumBlockQuestions(cultureQuestions, answers)

   let score = (performanceScore + energyScore + cultureScore) / questionnLenght

   return score
}