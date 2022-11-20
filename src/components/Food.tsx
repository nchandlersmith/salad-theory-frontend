import {TextField, Typography} from "@mui/material";
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
      >
        Name
      </TextField>
      <Typography
        variant='h6'
      >
        Recipe
      </Typography>
    </>
  )
}

export default Food;