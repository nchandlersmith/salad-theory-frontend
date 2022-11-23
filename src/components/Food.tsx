import {Button, FormGroup, TextField, Typography} from "@mui/material";
import React from "react";
import Ingredient from "./Ingredient";
import {IngredientItem} from "../interfaces/ingredientItem";

interface Props {
  ingredients: IngredientItem[]
  setIngredients: (ingredients: IngredientItem[]) => void
}

const baseIngredient: IngredientItem = {
  name: '',
  unit: '',
  quantity: 0
}


const Food = ({ingredients, setIngredients}: Props): JSX.Element => {
  const addIngredient = ():void => {
    setIngredients([...ingredients, baseIngredient])
  }
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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {ingredients.map((ingredient: IngredientItem, index) => {
          return (
            <>
              <Ingredient
                ingredient={ingredient}
                setIngredients={setIngredients}
                key={index}
              />
              <Button
                sx={{
                  fontSize: '1.5em',
                  height: '2em'
                }}
                onClick={() => addIngredient()}
                key={`${index}-button-add`}
              >+</Button>
            </>
          )
        })}
      </FormGroup>
    </>
  )
}

export default Food;