import {ingredientEntropy} from "./ingredientEntropy";

describe('ingredientEntropy', () => {
    it('should return 0 for glass of water', () => {
        const result = ingredientEntropy(1, 1)
        expect(result).toEqual(0)
    })
    it('should return 4.64 for glass of coke with 4 ice cubes', () => {
        const result = ingredientEntropy(5, 2)
        expect(result).toEqual(4.64)
    })
})