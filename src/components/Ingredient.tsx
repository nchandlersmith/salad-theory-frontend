import {TextField} from "@mui/material";
import React from "react";
import {IngredientItem} from "../interfaces/ingredientItem";

interface Props {
  ingredient: IngredientItem
  setIngredients: (ingredients: IngredientItem[]) => void
}

const baseIngredient: IngredientItem = {name: '', unit: '', quantity: 0}

const ingredient = ({ingredient, setIngredients}: Props): JSX.Element => {
  const updateIngredients = (value: string): void => {
    const updatedQuantity = Number(value)
    setIngredients([{...baseIngredient, quantity: updatedQuantity}])
  }

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
        onChange={event => updateIngredients(event.target.value)}
      />
    </>
  )
}

export default ingredient;