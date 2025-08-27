'use client'

import { useStep } from "@/store/useStep"
import { Button } from "./ui/button"

type Props = {
   onSubmit: () => void
   disabled: boolean
}
export const ButtonsForm = ({ onSubmit, disabled }: Props) => {
   const { step, prevStep } = useStep()

   return (
      <div className="w-full flex justify-center md:justify-end gap-4">
         {step >= 1 &&
            <Button
               variant="secondary"
               className="w-1/2 md:flex-1 duration-700 hover:opacity-75 cursor-pointer"
               onClick={prevStep}>Voltar</Button>
         }

         {step >= 0 && step < 3 &&
            <Button
               className="w-1/2 md:flex-1 bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={onSubmit}>Próximo</Button>
         }

         {step === 3 &&
            <Button
               className="w-1/2 md:flex-1 bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer"
               disabled={disabled}
               onClick={onSubmit}>Enviar</Button>
         }
      </div>
   )
}