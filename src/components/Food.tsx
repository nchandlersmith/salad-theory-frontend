import {FormGroup, TextField, Typography} from "@mui/material";
import React from "react";
import Ingredient from "./Ingredient";

const Food = () => {
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
        <Ingredient/>
      </FormGroup>
    </>
  )
}

export default Food;