// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveStorage = async (key: string, storage: any) => {
   return localStorage.setItem(key, JSON.stringify(storage))

}
