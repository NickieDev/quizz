export const userClassification = (score: number) => {
   if (score < 40) {
      return "Fit Fora do Perfil"
   } else if (score >= 40 && score <= 59) {
      return "Fit Questionável"
   } else if (score >= 60 && score <= 79) {
      return "Fit Aprovado"
   } else {
      return "Fit Altíssimo"
   }
}