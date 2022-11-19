export const ingredientEntropy = (numberIngredients: number, numberUniqueIngredients: number): number => {
    const ingredientEntropy = Math.log(numberIngredients)/Math.log(2) * numberUniqueIngredients
    return Math.round(ingredientEntropy * 100) /100
}