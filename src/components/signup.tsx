'use client'
import { Button } from "./ui/button"
import { useUser } from "@/store/useUser"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm } from "react-hook-form"
import { FormFieldTextItem } from "./form-field-text-item"

import { useStep } from "@/store/useStep"
import { signinSchema } from "@/schemas/signin-schema"
import { toast } from "sonner"
import { useEffect } from "react"
import { clearStorage } from "@/utils/clear-storage"

export const Signup = () => {
   const { setName, setEmail } = useUser()
   const { nextStep } = useStep()

   const form = useForm({
      defaultValues: {
         name: "",
         email: ""
      }
   })

   type FormData = { name: string; email: string }

   const onSubmit = (data: FormData) => {
      const nameField = data.name
      const emailField = data.email

      const safeData = signinSchema.safeParse({ name: nameField, email: emailField })

      if (!safeData.success) {
         return toast.error("Por favor, insira um nome e um email válidos.")
      }

      setName(nameField)
      setEmail(emailField)

      nextStep()
   }

   useEffect(() => {
      clearStorage('score')
   }, [])

   return (
      <div className="w-full md:max-w-1/3">
         <h1 className="text-gray mb-4">Antes de começarmos, forneça os seguintes dados: </h1>

         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">

            <Form {...form}>
               <FormFieldTextItem label="Nome" nameField="name" form={form} />

               <FormFieldTextItem label="Email" nameField="email" form={form} />

               <Button
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.watch("name") !== "" && form.watch("email") !== "" ? false : true}
                  className="w-full md:w-auto bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"> Próximo</Button>
            </Form>
         </div>
      </div >
   )
}