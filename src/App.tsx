import IngredientEntropy from "./components/IngredientEntropy";
import {useEffect} from "react";
import Header from "./components/Header";
import Food from "./components/Food";
import {Grid} from "@mui/material";


function App() {
  useEffect(() => {
    document.title = 'Food Entropy Calculator'
  }, [])
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
      <Food />
      <IngredientEntropy/>
    </Grid>
  );
}

export default App;
