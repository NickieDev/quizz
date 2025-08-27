import { TriangleAlert } from "lucide-react"

type Props = {
   score: number
   classification: string
}

export const FitQuestionable = ({ score, classification }: Props) => {
   return (
      <div className="flex flex-col items-center gap-2">
         <p className="">
            Parabéns, sua classificação foi:
         </p>

         <p className="flex text-warning font-bold gap-2">
            <TriangleAlert className="text-warning" />{classification}</p>

         <p>Seu Fit nos mostra que você tem um potencial a ser explorado. ✨</p>
      </div>
   )
}