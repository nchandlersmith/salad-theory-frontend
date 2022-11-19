import React, {useState} from 'react';
import {ingredientEntropy} from "./helpers/ingredientEntropy";
import {TextField} from "@mui/material";

function App() {
  const [numberIngredients, setNumberIngredients] = useState<number>(0)
  const [numberUniqueIngredients, setNumberUniqueIngredients] = useState<number>(0)

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
            margin:'1rem'
          }}
          label='Number of Ingredients'
          value={numberIngredients}
          onChange={event => setNumberIngredients(Number(event.target.value))}
          />
      </div>
      <div>
        <TextField
          sx={{
            margin:'1rem'
          }}
          label='Number of Unique Ingredients'
          value={numberUniqueIngredients}
          onChange={event => setNumberUniqueIngredients(Number(event.target.value))}
        />
      </div>
      <div>
        <TextField
          sx={{
            margin:'1rem'
          }}
          label='Ingredient Entropy'
          value={String(ingredientEntropy(numberIngredients, numberUniqueIngredients))}
        />
      </div>
    </>
  );
}

export default App;
