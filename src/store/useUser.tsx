import { User } from "@/types/user"
import { create } from "zustand"


export const useUser = create<User>()((set, get) => ({
   name: '',
   setName: (name: string) => set({ name }),

   email: '',
   setEmail: (email: string) => set({ email }),
}))