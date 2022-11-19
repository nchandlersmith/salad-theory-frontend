import React, {useState} from "react";
import {Grid, TextField, Typography} from "@mui/material";
import {ingredientEntropy} from "../helpers/ingredientEntropy";

const IngredientEntropy = () => {
  const [numberIngredients, setNumberIngredients] = useState<number>(0)
  const [numberUniqueIngredients, setNumberUniqueIngredients] = useState<number>(0)

  return (
    <Grid
      sx={{
        marginTop:'5rem'
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
          Ingredient Entropy
        </Typography>
        <TextField
          sx={{
            marginTop:'1rem',
            margin:'1rem'
          }}
          label='Number of Ingredients'
          value={numberIngredients}
          onChange={event => setNumberIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin:'1rem'
          }}
          label='Number of Unique Ingredients'
          value={numberUniqueIngredients}
          onChange={event => setNumberUniqueIngredients(Number(event.target.value))}
        />
        <TextField
          sx={{
            margin:'1rem'
          }}
          label='Ingredient Entropy'
          value={String(ingredientEntropy(numberIngredients, numberUniqueIngredients))}
        />
    </Grid>
  )

}

export default IngredientEntropy;