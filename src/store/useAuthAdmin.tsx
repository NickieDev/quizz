import { create } from "zustand";

type Authenticate = {
   auth: boolean
   setAuth: (auth: boolean) => void
}
export const useAuthAdmin = create<Authenticate>((set, get) => ({
   auth: false,

   setAuth: (auth: boolean) => set({ auth }),
}))