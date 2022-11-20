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
        Recipe
      </Typography>
      <FormGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {<ul>{ingredients.map((ingredient: IngredientItem, index) => {
          return (
            <li>
              {<Ingredient
                ingredient={ingredient}
                setIngredients={setIngredients}
                key={index}
              />}
            </li>)
        })}</ul>}
      </FormGroup>
    </>
  )
}

export default Food;