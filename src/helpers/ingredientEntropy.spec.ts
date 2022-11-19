import {ingredientEntropy} from "./ingredientEntropy";

describe('ingredientEntropy', () => {
    it('should return 0 for glass of water', () => {
        const result = ingredientEntropy(1, 1)
        expect(result).toEqual('0')
    })
    it('should return 4.64 for glass of coke with 4 ice cubes', () => {
        const result = ingredientEntropy(5, 2)
        expect(result).toEqual('4.64')
    })
    it('should return empty space when the calculated value is NaN', () => {
        const result = ingredientEntropy(0, 0)
        expect(result).toEqual(' ')
    })
    it('should return empty space when the calculated value is -Infinity', () => {
        const result = ingredientEntropy(0, 1)
        expect(result).toEqual(' ')
    })
})