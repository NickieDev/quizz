import z from "zod";

export const signinSchema = z.object({
   name: z.string(),
   email: z.email(),
})