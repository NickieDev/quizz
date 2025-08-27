import { FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"

type Props = {
   label: string
   nameField: string
   form: any
   passwordField?: boolean
}

export const FormFieldTextItem = ({ label, nameField, form, passwordField }: Props) => {
   return (
      <FormField
         name={nameField}
         control={form.control}
         render={({ field }) => (
            <FormItem>
               <FormLabel
                  className="text-dark-blue"
                  htmlFor={nameField}>{label}</FormLabel>

               <FormControl>
                  <Input
                     className="border border-light-blue focus-visible:ring-dark-blue focus-visible:ring-2 focus-visible:border-none "
                     id={nameField}
                     {...field}
                     type={passwordField ? "password" : "text"}
                  />
               </FormControl>
            </FormItem>
         )}
      />
   )
}