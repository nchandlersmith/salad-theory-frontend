import IngredientEntropy from "./components/IngredientEntropy";
import Greeting from "./components/Greeting";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = 'Food Entropy Calculator'
  }, [])
  return (
    <>
      <Greeting />
      <IngredientEntropy/>
    </>
  );
}

export default App;
