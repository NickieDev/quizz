export const saveStorage = async (key: string, storage: string | number | boolean) => {
   return localStorage.setItem(key, JSON.stringify(storage))
}