import { UseFormProps, UseFormReturn } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"

type Props = {
   nameField: string
   value: string
   form: any
}

export const FormFieldRadioItem = ({ nameField, value, form }: Props) => {
   return (
      <FormField
         name={nameField}
         control={form.control}
         render={({ field }) => (
            <FormItem>
               <FormControl>
                  <RadioGroup>
                     <RadioGroupItem value={value}>
                        {value}
                     </RadioGroupItem>
                  </RadioGroup>
               </FormControl>
            </FormItem>
         )}
      />
   )
}