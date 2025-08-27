'use client'
import { Button } from "./ui/button"
import { Form, } from "./ui/form"
import { useForm } from "react-hook-form"
import { FormFieldTextItem } from "./form-field-text-item"
import { toast } from "sonner"
import { useEffect } from "react"
import { adminSigninSchema } from "@/schemas/admin-signin-schema"
import { getAdminUsers } from "@/utils/get-admin-users"
import { saveStorage } from "@/utils/save-storage"
import { useAuthAdmin } from "@/store/useAuthAdmin"

export const AdminSignup = () => {
   const { auth, setAuth } = useAuthAdmin()

   const form = useForm({
      defaultValues: {
         email: "",
         password: ""
      }
   })

   type FormData = { email: string; password: string }

   const onSubmit = (data: FormData) => {
      const emailField = data.email
      const passwordField = data.password

      const safeData = adminSigninSchema.safeParse({ email: emailField, password: passwordField })

      if (!safeData.success) {
         return toast.error("Por favor, insira um email e uma senha válidos.")
      }

      getAdminUsers()
         .then(admin => {
            console.log(admin[0])
            if (admin) {
               if (admin[0].email === emailField && admin[0].password === passwordField) {
                  saveStorage('auth', true)

                  setAuth(true)

                  toast.success("Login realizado com sucesso!")
               } else {
                  toast.error("Email ou senha incorretos.")
               }
            }
         })
   }

   useEffect(() => {

   }, [])

   return (
      <div className="w-full flex justify-center flex-col flex-1 md:max-w-1/3">
         <h1 className="text-light mb-4">Realize o login para visualizar os dados.</h1>

         <div className="flex flex-col gap-4 p-4 w-full border-gradient-legal">

            <Form {...form}>
               <FormFieldTextItem label="Email" nameField="email" form={form} />

               <FormFieldTextItem label="Senha" nameField="password" passwordField form={form} />

               <Button
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={form.watch("email") !== "" && form.watch("password") !== "" ? false : true}
                  className="w-full md:w-auto bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"> Logar</Button>
            </Form>
         </div>
      </div >
   )
}