import React, {useState} from "react";
import {FormGroup, Grid, TextField, Typography} from "@mui/material";
import {ingredientEntropy} from "../helpers/ingredientEntropy";

const IngredientEntropy = () => {
  const [numberIngredients, setNumberIngredients] = useState<number>(0)
  const [numberUniqueIngredients, setNumberUniqueIngredients] = useState<number>(0)

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
          onChange={event => setNumberIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin: '1em'
          }}
          label='Number of Unique Ingredients'
          value={zeroGuard(String(numberUniqueIngredients))}
          onChange={event => setNumberUniqueIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin: '1em'
          }}
          label='Ingredient Entropy'
          value={ingredientEntropy(numberIngredients, numberUniqueIngredients)}
        />
      </FormGroup></>

  )

}

export default IngredientEntropy;