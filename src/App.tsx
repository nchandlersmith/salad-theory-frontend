import IngredientEntropy from "./components/IngredientEntropy";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Food from "./components/Food";
import {Grid} from "@mui/material";
import {IngredientItem} from "./interfaces/ingredientItem";

const initialIngredients: IngredientItem = {
  ingredientName: '', unit: '', quantity: 0,
}

function App() {
  useEffect(() => {
    document.title = 'Food Entropy Calculator'
  }, [])
  const [ingredients, setIngredients] = useState<IngredientItem[]>([initialIngredients])
  return (
    <Grid
      sx={{
        marginTop:'5em'
      }}
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyItems='center'
    >
      <Header/>
      <Food
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <IngredientEntropy/>
    </Grid>
  );
}

export default App;
