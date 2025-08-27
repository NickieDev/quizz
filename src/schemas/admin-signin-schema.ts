import z from "zod";

export const adminSigninSchema = z.object({
   email: z.email(),
   password: z.string(),
})