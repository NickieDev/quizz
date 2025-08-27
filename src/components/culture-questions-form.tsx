'use client'

import { useStep } from "@/store/useStep"
import { useForm } from "react-hook-form"
import { api } from "@/utils/api"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { ButtonsForm } from "./buttons-form"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { cultureQuestions } from "@/utils/questions"
import { useAnswers } from "@/store/useAnswers"
import { useUser } from "@/store/useUser"
import { sumScore } from "@/utils/sum-score"
import { userClassification } from "@/utils/classification"
import { userAnswersSchema } from "@/schemas/user-answers-schema"
import { toast } from "sonner"
import { mockData } from "@/utils/mock-data"
import { useRouter } from "next/navigation"
import { useUserAnswers } from "@/store/useUserAnswers"
import { saveStorage } from "@/utils/save-storage"


export const CultureQuestionsForm = () => {
   const { step } = useStep()
   const { name, email } = useUser()
   const { answers, setAnswers } = useAnswers()
   const { setUserAnswers } = useUserAnswers()

   const router = useRouter()

   type FormFields = typeof cultureQuestions[number]['id']

   const defaultValues = Object.fromEntries(
      cultureQuestions.map(q => [q.id, ""])
   )

   const form = useForm({
      defaultValues
   })

   const onSubmit = async () => {
      const newAnswers = {
         ...answers,
         ...form.getValues()
      }

      const userScore = sumScore(newAnswers)

      setAnswers(newAnswers)

      const userAnswers = {
         user: {
            name,
            email
         },
         answers: {
            ...answers,
            ...form.getValues()
         },
         score: userScore,
         classification: userClassification(userScore),
         createdAt: new Date()

      }

      const safeData = userAnswersSchema.safeParse(userAnswers)

      if (!safeData.success) {
         console.error(safeData.error)
         return toast.error("Erro ao enviar respostas. Atualise a página e tente novamente.")
      }

      // await api.post('/', { mockData })
      await api.post('/candidates', { userAnswers })
         .then(async(res) => {
            setUserAnswers(res.data)

            const score = res.data.userAnswers.score
            const classification = res.data.userAnswers.classification

            await saveStorage('score',  { score, classification})

            toast.success("Respostas enviadas com sucesso!")

            router.replace('/result')
            console.log(res.data)
         })
         .catch(err => console.error(err))

   }

   return (
      <div className="w-full md:max-w-1/2">
         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">
            <h2 className="text-center text-gray">
               Perguntas sobre a Cultura - <span className="font-bold">Etapa {step}/3</span>
            </h2>

            <Form {...form}>
               <div className="flex flex-col gap-2 md:gap-4 flex-1 max-h-80 overflow-auto">
                  {cultureQuestions.map(question => (
                     <FormField
                        key={question.id}
                        name={question.id as FormFields}
                        control={form.control}
                        render={({ field }) => (
                           <FormItem
                              key={question.id}
                              className="mb-2" >
                              <FormControl>
                                 <RadioGroup
                                    key={question.id}
                                    onValueChange={field.onChange}
                                    id={question.id}
                                    className="flex flex-col gap-2">

                                    <FormLabel
                                       className="w-full text-dark-blue text-center font-bold md:text-left">
                                       {question.label}</FormLabel>

                                    {question.options.map(option => (
                                       <div className="flex gap-2" key={option}>
                                          <RadioGroupItem id={option} value={option} className="" />

                                          <Label htmlFor={option}>{option}</Label>
                                       </div>
                                    ))}

                                 </RadioGroup>
                              </FormControl>
                           </FormItem>
                        )}
                     />
                  ))}
               </div>

               <ButtonsForm
                  onSubmit={onSubmit}
                  disabled={Object.values(form.watch()).every(value => value !== '') ? false : true}
               />
            </Form>
         </div>
      </div>
   )

}

