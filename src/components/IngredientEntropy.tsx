import React, {useState} from "react";
import {Grid, TextField, Typography} from "@mui/material";
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
    <Grid
      sx={{
        marginTop:'5em'
      }}
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyItems='center'
    >
        <Typography
          variant='h5'
        >
          Calculate Ingredient Entropy
        </Typography>
        <TextField
          sx={{
            marginTop:'1em',
            margin:'1em'
          }}
          label='Number of Ingredients'
          value={zeroGuard(String(numberIngredients))}
          onChange={event => setNumberIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin:'1em'
          }}
          label='Number of Unique Ingredients'
          value={zeroGuard(String(numberUniqueIngredients))}
          onChange={event => setNumberUniqueIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin:'1em'
          }}
          label='Ingredient Entropy'
          value={ingredientEntropy(numberIngredients, numberUniqueIngredients)}
        />
    </Grid>
  )

}

export default IngredientEntropy;