'use client'
import { api } from "./api"

export const getAdminUsers = async () => {
   const response = await api.get('/admin')

   return response.data
}