import { CircleCheckBig } from "lucide-react"

type Props = {
   score: number
   classification: string
}

export const FitApproved = ({ score, classification }: Props) => {
   return (
      <div className="flex flex-col items-center gap-2">
         <p className="flex items-center text-center gap-2">
            Parabéns, sua classificação foi:
         </p>

         <p className="flex text-primary font-bold gap-2"><CircleCheckBig className="text-primary" />{classification}</p>

         <p>Com esse Fit podemos perceber que você é uma pessoa que se empenha em fazer o melhor. ✌️</p>
      </div>
   )
}