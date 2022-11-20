import {TextField} from "@mui/material";
import React from "react";
import {IngredientItem} from "../interfaces/ingredientItem";

interface Props {
  ingredient: IngredientItem
  key: number
  setIngredients: (ingredients: IngredientItem[]) => void
}

const ingredient = ({ingredient}: Props): JSX.Element => {
  return(
    <>
      <TextField
        sx={{
          margin: '1em'
        }}
        label='Ingredient Name'
      />
      <TextField
        sx={{
          margin: '1em'
        }}
        label='Unit'
      />
      <TextField
        sx={{
          margin: '1em'
        }}
        label='Quantity'
      />
    </>
  )
}

export default ingredient;