import z from "zod";

export const userAnswersSchema = z.object({
   user: z.object({
      name: z.string(),
      email: z.email()
   }),
   answers: z.object({
      experience: z.string(),
      deliverables: z.string(),
      skills: z.string(),

      availability: z.string(),
      deadlines: z.string(),
      pressure: z.string(),

      values: z.string(),
      collaboration: z.string(),
      adaptation: z.string(),
      communication: z.string()
   }),
   score: z.number(),
   classification: z.enum(['Fit Altíssimo', 'Fit Aprovado', 'Fit Questionável', 'Fit Fora do Perfil']),
   createdAt: z.date()
})