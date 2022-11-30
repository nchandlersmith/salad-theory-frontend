import {Button, FormGroup, Grid, TextField, Typography} from "@mui/material";
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
  const removeIngredient = (index: number):void => {
    ingredients.splice(index,1)
    setIngredients(ingredients)
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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {ingredients.map((ingredient: IngredientItem, index) => {
          return (
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
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
              <Button
                sx={{
                  fontSize: '1.5em',
                  height: '2em'
                }}
                onClick={() => removeIngredient(index)}
                key={`${index}-button-remove`}
              >-</Button>
            </Grid>
          )
        })}
      </FormGroup>
    </>
  )
}

export default Food;