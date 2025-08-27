'use client'

import { useStep } from "@/store/useStep"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { ButtonsForm } from "./buttons-form"
import { RadioGroup } from "@radix-ui/react-radio-group"
import { RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { performanceQuestions } from "@/utils/questions"
import { useAnswers } from "@/store/useAnswers"
import { useEffect } from "react"
import { useUser } from "@/store/useUser"

export const PerformanceQuestionsForm = () => {
   const { step, nextStep } = useStep()
   const { answers, setAnswers } = useAnswers()

   type FormFields = typeof performanceQuestions[number]['id']

   const defaultValues = Object.fromEntries(
      performanceQuestions.map(q => [q.id, ""])
   )

   const form = useForm({
      defaultValues
   })

   const onSubmit = async () => {
      setAnswers({
         ...answers,
         ...form.getValues()
      })

      nextStep()
   }

   return (
      <div className="w-full md:max-w-1/2">
         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">
            <h2 className="text-center text-gray">
               Perguntas sobre a Performance - <span className="font-bold">Etapa {step}/3</span>
            </h2>

            <Form {...form}>
               <div className="flex flex-col gap-2 md:gap-4 flex-1 max-h-80 overflow-auto">
                  {performanceQuestions.map(question => (
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

                                    <FormLabel className="text-dark-blue font-bold text-center md:text-left">{question.label}</FormLabel>

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