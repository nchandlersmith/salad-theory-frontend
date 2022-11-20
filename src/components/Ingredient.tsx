import {TextField} from "@mui/material";
import React from "react";

const ingredient = () => {
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