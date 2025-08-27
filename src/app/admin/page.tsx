'use client'

import { AdminSignup } from "@/components/admin-signup"
import { Button } from "@/components/ui/button"
import { UserTable } from "@/components/user-table"
import { useAuthAdmin } from "@/store/useAuthAdmin"
import { clearStorage } from "@/utils/clear-storage"
import { getStorage } from "@/utils/get-storage"
import { useEffect, useState } from "react"

export default function Page() {
   const { auth, setAuth } = useAuthAdmin()

   const handleSignOut = () => {
      setAuth(false)

      clearStorage('auth')
   }

   useEffect(() => {
      const adminAuth = getStorage('auth')

      adminAuth !== true ? setAuth(false) : setAuth(true)
   }, [auth])

   return (
      <main className="w-full h-screen bg-gradient-legal">
         <div className="w-full h-full flex items-center flex-col gap-4 p-4">
            <h2
               className="text-3xl text-light text-center font-bold">
               Área Administrativa {auth && <Button variant={"secondary"} onClick={handleSignOut}>Sair</Button>}
            </h2>

            {auth ? <UserTable /> : <AdminSignup />}

         </div>
      </main>
   )
}