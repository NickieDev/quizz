import { Answers } from "@/types/answers"
import { BlockQuestion } from "@/types/block-question"

export const sumBlockQuestions = (blockQuestion: BlockQuestion[], answers: Answers) => {
   let score = 0
   
   const compareAnsweres = Object.values(answers)

   const points = [0, 33, 66, 100]

   blockQuestion.forEach(question => {
      const response = compareAnsweres.find(answer => answer === answers[question.id as keyof typeof answers])
      console.log(response)

      const index = question.options.findIndex(option => option === response)

      if (index >= 0) {
         score += points[index]
      }
   })

   return score

}