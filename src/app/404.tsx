'use client'
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NotFound() {
   const router = useRouter()

   useEffect(() => {
      router.replace('/')
   }, [])

   return (
      <main className="w-full h-screen bg-gradient-legal">
         <div className="h-full flex flex-col justify-center items-center gap-4 p-4 flex-1 px-4 py-8">
            <h2 className="text-3xl text-light text-center font-bold">Página não encontrada</h2>
         </div>
      </main>
   )
}
