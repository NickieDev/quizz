export const getStorage = (key: string) => {
   if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key)

      if (stored) {
         return JSON.parse(stored)
      }
   }

   return null
}