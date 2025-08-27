import { X } from "lucide-react"

type Props = {
   score: number
   classification: string
}

export const FitOutOfProfile = ({ score, classification }: Props) => {
   return (
      <div className="flex flex-col items-center gap-2">
         <p className="flex items-center text-center gap-2">
            Sua classificação foi:
         </p>

         <p className="flex text-destructive font-bold gap-2">
            <X className="text-destructive" />{classification}</p>

         <p>Não se preocupe, as skill podem ser evoluídas. Continue se emprenhando e nunca desista dos seus sonhos. 🚀</p>
      </div>
   )
}