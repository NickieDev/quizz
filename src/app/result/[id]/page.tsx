'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuthAdmin } from "@/store/useAuthAdmin"
import { UserAnswer } from "@/types/user-answers"
import { GetUserById } from "@/utils/get-user-by-id"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Page() {
   const [user, setUser] = useState<UserAnswer | null>(null)

   const { id } = useParams()
   const { auth } = useAuthAdmin()

   const router = useRouter()

   useEffect(() => {
      GetUserById(id as string)
         .then(data => {
            auth ? setUser(data) : router.replace("/")
         }).catch(() => {
            router.replace("/")
         })
   }, [id])

   return (
      <main className="w-full h-screen bg-gradient-legal">
         <div className="h-full flex flex-col justify-center items-center gap-4 p-4 flex-1 px-4 py-8">
            <h2 className="text-3xl text-light text-center font-bold">Fit de {user?.userAnswers.user.name}</h2>

            <div className="w-full px-4 py-8 bg-light rounded md:max-w-1/2">
               {user && (
                  <div className="">
                     <div className="w-full flex flex-col justify-between items-start gap-4 md:flex-row md:items-center md:gap-2">
                        <p>
                           <span className="text-dark-blue font-bold">Nome:</span> {user.userAnswers.user.name}</p>

                        <p>
                           <span className="text-dark-blue font-bold">Email:</span> {user.userAnswers.user.email}</p>

                        <p>
                           <span className="text-dark-blue font-bold">Score:</span> {user.userAnswers.score}</p>

                        <p>
                           <span className="text-dark-blue font-bold">Classificação do Fit:</span> {user.userAnswers.classification}</p>
                     </div>

                     <div className="w-full flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2 my-4">
                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button
                                 className="w-full md:flex-1 bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer">Performance</Button>
                           </DropdownMenuTrigger>

                           <DropdownMenuContent>
                              <p>
                                 <span className="text-dark-blue font-bold">Experiência:</span> {user.userAnswers.answers.experience}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Entregas:</span> {user.userAnswers.answers.deliverables}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Habilidades:</span> {user.userAnswers.answers.skills}</p>
                           </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button
                                 className="w-full md:flex-1 bg-gradient-legal duration-700  hover:opacity-75 cursor-pointer">Energia</Button>
                           </DropdownMenuTrigger>

                           <DropdownMenuContent>
                              <p>
                                 <span className="text-dark-blue font-bold">Disponibilidade:</span> {user.userAnswers.answers.availability}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Prazos:</span> {user.userAnswers.answers.deadlines}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Pressão:</span> {user.userAnswers.answers.pressure}</p>
                           </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button
                                 className="w-full md:flex-1 bg-gradient-legal duration-700 hover:opacity-75 cursor-pointer">Cultura</Button>
                           </DropdownMenuTrigger>

                           <DropdownMenuContent>
                              <p>
                                 <span className="text-dark-blue font-bold">Valores:</span> {user.userAnswers.answers.values}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Colaboração:</span> {user.userAnswers.answers.collaboration}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Adaptação:</span> {user.userAnswers.answers.adaptation}</p>

                              <p>
                                 <span className="text-dark-blue font-bold">Comunicação:</span> {user.userAnswers.answers.communication}</p>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     </div>


                  </div>
               )}

               <div className="w-full flex justify-center md:justify-end">
                  <Button
                     variant="secondary"
                     onClick={() => router.push(`/admin`)}
                     className="w-full md:w-1/3 cursor-pointer"> Voltar </Button>
               </div>
            </div>
         </div>
      </main>
   )
}
