import { Flame } from "lucide-react"

type Props = {
   score: number
   classification: string
}

export const FitHigher = ({ score, classification }: Props) => {
   return (
      <div className="flex flex-col items-center gap-2">
         <p className="flex items-center text-center gap-2">
            Parabéns, sua classificação foi:
         </p>

         <p className="flex text-success font-bold gap-2">
            <Flame className="text-success" />{classification}</p>

         <p>Suas skills não passaram despercebidos pela nossa equipe! 🫰</p>
      </div>
   )
}