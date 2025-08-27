import { api } from "./api"

export const GetUserById = async (id: string) => {
   const res = await api.get(`/candidates/${id}`)

   return res.data.id ? res.data : null
}
