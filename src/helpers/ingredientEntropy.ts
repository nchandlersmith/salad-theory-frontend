import IngredientEntropy from "../components/IngredientEntropy";

export const ingredientEntropy = (numberIngredients: number, numberUniqueIngredients: number): string => {
    const entropy = Math.log(numberIngredients)/Math.log(2) * numberUniqueIngredients
    const roundedEntropy = Math.round(entropy * 100)/100 // round to 2 decimal places
    if (Number.isNaN(roundedEntropy) || roundedEntropy === Number.NEGATIVE_INFINITY) {
        return ' '
    }
    return String(roundedEntropy)
}