import { UserAnswer } from "@/types/user-answers"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { getUsersAnswers } from "@/utils/get-users-answers"
import { ClassificationOptions } from "@/types/classification-options"
import { NotFoundResults } from "./not-found-results"
import { useRouter } from "next/navigation"

const classificationOptions = [
   "Fit Altíssimo",
   "Fit Aprovado",
   "Fit Questionável",
   "Fit Fora do Perfil"
];

export const UserTable = () => {
   const [answers, setAnswers] = useState<UserAnswer[]>([])

   const [answersClone, setAnswersClone] = useState<UserAnswer[]>([])

   const [classificationFilter, setClassificationFilter] = useState('Todas')

   const router = useRouter()

   const filteredAnswers = (value: ClassificationOptions | 'Todas') => {
      setClassificationFilter(value)

      switch (value) {
         case 'Fit Altíssimo':
            return setAnswersClone(answers.filter(answer => answer.userAnswers.classification === value))
         case 'Fit Aprovado':
            return setAnswersClone(answers.filter(answer => answer.userAnswers.classification === value))
         case 'Fit Questionável':
            return setAnswersClone(answers.filter(answer => answer.userAnswers.classification === value))
         case 'Fit Fora do Perfil':
            return setAnswersClone(answers.filter(answer => answer.userAnswers.classification === value))
         default:
            return setAnswersClone(answers)
      }
   }

   useEffect(() => {
      getUsersAnswers().then(res => {
         setAnswers(res)
         setAnswersClone(res)
      })
   }, [])

   return (
      <div className="w-full flex justify-center items-center flex-col flex-1 md:max-w-2/3">
         {answers.length >= 1 &&
            <div className="w-full md:w-2/3 flex flex-col gap-4">
               <div className="flex gap-4 justify-center md:justify-end">
                  <Select
                     value={classificationFilter}
                     onValueChange={(value) => filteredAnswers(value as ClassificationOptions | 'Todas')}>

                     <SelectTrigger className="w-56 text-light font-bold focus-visible:ring-0">
                        <SelectValue placeholder="Filtrar por Classificação" />
                     </SelectTrigger>

                     <SelectContent>
                        <SelectItem
                           className="text-dark-blue font-bold"
                           value="Todas">Todas</SelectItem>

                        {classificationOptions.map(option => (
                           <SelectItem
                              key={option}
                              className="text-dark-blue font-bold"
                              value={option}>{option}</SelectItem>
                        ))}

                     </SelectContent>
                  </Select>
               </div>

               <Table className="border-gradient-legal">
                  <TableCaption>Lista de usuários que realização o Fit.</TableCaption>

                  <TableHeader>
                     <TableRow>
                        <TableHead className="text-dark-blue">
                           ID</TableHead>

                        <TableHead className="text-dark-blue">
                           Nome</TableHead>

                        <TableHead className="text-dark-blue">
                           Email</TableHead>

                        <TableHead className="text-dark-blue">
                           Score</TableHead>

                        <TableHead className="text-dark-blue">
                           Classificação</TableHead>
                     </TableRow>
                  </TableHeader>

                  <TableBody>
                     {answersClone.map((answer, index) => (
                        <TableRow
                           key={index}
                           className="cursor-pointer"
                           onClick={() => router.push(`/result/${answer.id}`)}>
                           <TableCell className="font-medium">{answer.id}</TableCell>

                           <TableCell>{answer.userAnswers.user.name}</TableCell>

                           <TableCell>{answer.userAnswers.user.email}</TableCell>

                           <TableCell className="">{answer.userAnswers.score.toFixed(1)}</TableCell>

                           <TableCell className="">{answer.userAnswers.classification}</TableCell>
                        </TableRow>
                     ))}

                  </TableBody>

               </Table>
            </div>
         }

         {answers.length === 0 && <NotFoundResults />}
      </div>
   )
}