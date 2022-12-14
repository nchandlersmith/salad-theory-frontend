import React, {useState} from "react";
import {FormGroup, TextField, Typography} from "@mui/material";
import {ingredientEntropy} from "../helpers/ingredientEntropy";
import {IngredientItem} from "../interfaces/ingredientItem";

interface Props {
  ingredients: IngredientItem[]
}

const IngredientEntropy = ({ingredients}: Props) => {
  const [numberIngredients, setNumberIngredients] = useState<number>(0)
  const [numberUniqueIngredients, setNumberUniqueIngredients] = useState<number>(0)

  const protectedNumberOfIngredientsChange = (value: string):void => {
    const numberValue = Number(value)
    if (numberValue !== numberIngredients) {
      setNumberIngredients(numberValue)
    }
  }

  const protectedNumberOfUniqueIngredientsChange = (value: string):void => {
    const numberValue = Number(value)
    if (numberValue !== numberUniqueIngredients) {
      setNumberUniqueIngredients(numberValue)
    }
  }

  const calculateEntropy = (numberIngredients: number, numberUniqueIngredients: number): string => {
    const newQuantity = ingredients[0].quantity
    if (newQuantity) {
      protectedNumberOfIngredientsChange(String(newQuantity))
      protectedNumberOfUniqueIngredientsChange('1')
      return ingredientEntropy(newQuantity, 1)
    }
    return ingredientEntropy(numberIngredients, numberUniqueIngredients)
  }

    const zeroGuard = (value: string): string => {
    if (value === '0') {
      return ' '
    }
    return value
  }

  return (
    <>
      <Typography
        variant='h5'
      >
        Calculate Ingredient Entropy
      </Typography>
      <FormGroup
        sx={{
          marginTop: '1em',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <TextField
          sx={{
            marginTop: '1em',
            margin: '1em'
          }}
          label='Number of Ingredients'
          value={zeroGuard(String(numberIngredients))}
          onChange={event => protectedNumberOfIngredientsChange(event.target.value)}
        />
        <TextField
          sx={{
            margin: '1em'
          }}
          label='Number of Unique Ingredients'
          value={zeroGuard(String(numberUniqueIngredients))}
          onChange={event => protectedNumberOfUniqueIngredientsChange(event.target.value)}
        />
        <TextField
          sx={{
            margin: '1em'
          }}
          label='Ingredient Entropy'
          value={calculateEntropy(numberIngredients, numberUniqueIngredients)}
        />
      </FormGroup></>

  )

}

export default IngredientEntropy;