export const saveStorage = async (key: string, storage: any) => {
   return localStorage.setItem(key, JSON.stringify(storage))
}