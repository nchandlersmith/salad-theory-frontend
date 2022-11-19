import React from 'react';
import {ingredientEntropy} from "./helpers/ingredientEntropy";
import {TextField} from "@mui/material";

function App() {
  return (
    <>
      <div>
        <a
          href={'https://saladtheory.github.io/'}
        >A food entropy calculator inspired by this work.
        </a>
      </div>
      <div>
        <TextField
          sx={{
            margin:'2rem'
          }}
          label='Number of Ingredients'/>
      </div>
    </>
  );
}

export default App;
