'use client'

import { FitApproved } from "@/components/fit-approved"
import { FitHigher } from "@/components/fit-higher"
import { FitOutOfProfile } from "@/components/fit-out-of-profile"
import { FitQuestionable } from "@/components/fit-quesionable"
import { useUserAnswers } from "@/store/useUserAnswers"
import { getStorage } from "@/utils/get-storage"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Page() {
   const router = useRouter()

   type Classification = 'Fit Altíssimo' | 'Fit Aprovado' | 'Fit Questionável' | 'Fit Fora do Perfil'

   const [score, setScore] = useState(0)
   const [classification, setClassification] = useState<Classification>('Fit Fora do Perfil')


   const phase = () => {
      if (classification === 'Fit Altíssimo') {
         return <FitHigher score={score} classification={classification} />
      } else if (classification === 'Fit Aprovado') {
         return <FitApproved score={score} classification={classification} />
      } else if (classification === 'Fit Questionável') {
         return <FitQuestionable score={score} classification={classification} />
      } else {
         return <FitOutOfProfile score={score} classification={classification} />
      }
   }

   const getUserAnswers = async () => {
      const storage = await getStorage('score')

      if (storage && storage !== undefined && storage !== null && storage.score !== '') {
         setScore(storage.score)
         setClassification(storage.classification)
      } else {
         router.replace('/')
      }
   }

   useEffect(() => {
      getUserAnswers()
   }, [])

   return (
      <div className="w-full h-screen flex justify-center items-center  px-4 py-8 bg-gradient-legal">
         <div
            className="w-full md:max-w-1/2 flex flex-col justify-center items-center gap-4 p-8 rounded bg-light">
            <h1 className="text-2xl text-sky-500 font-bold">RESULTADO</h1>

            <p className="text-light-blue font-bold">Seu Score foi de {score.toFixed(1)}</p>

            {phase()}
         </div>
      </div>
   )
}