import { api } from "./api"

export const getUsersAnswers = async () => {
   const response = await api.get('/candidates')
   
   return response.data
}
