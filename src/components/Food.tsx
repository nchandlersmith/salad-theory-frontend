import {FormGroup, TextField, Typography} from "@mui/material";
import React from "react";

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

      </FormGroup>
    </>
  )
}

export default Food;