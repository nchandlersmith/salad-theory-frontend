import IngredientEntropy from "./components/IngredientEntropy";
import {useEffect} from "react";
import Header from "./components/Header";


function App() {
  useEffect(() => {
    document.title = 'Food Entropy Calculator'
  }, [])
  return (
    <>
      <Header/>
      <IngredientEntropy/>
    </>
  );
}

export default App;
