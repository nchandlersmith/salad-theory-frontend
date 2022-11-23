import {FormGroup, TextField, Typography} from "@mui/material";
import React from "react";
import Ingredient from "./Ingredient";
import {IngredientItem} from "../interfaces/ingredientItem";

interface Props {
  ingredients: IngredientItem[]
  setIngredients: (ingredients: IngredientItem[]) => void
}


const Food = ({ingredients, setIngredients}: Props): JSX.Element => {
  return (
    <>
      <Typography
        variant='h5'
      >
        Food
      </Typography>
      <TextField
        label='Name'
      />
      <Typography
        sx={{
          marginTop: '1em'
        }}
        variant='h6'
      >
        Ingredient List
      </Typography>
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {ingredients.map((ingredient: IngredientItem, index) => {
          return (
            <Ingredient
              ingredient={ingredient}
              setIngredients={setIngredients}
              key={index}
              />)
        })}
      </FormGroup>
    </>
  )
}

export default Food;