import "./App.css";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LandingPage } from "./Pages/LandingPage";
import { Pokedex } from "./Pages/Pokedex/Pokedex";
import { Create } from "./Pages/Create/Create";
import { Navbar } from "./components/Navbar/Navbar";
import { getPokemons, getTypes } from "../src/redux/actions";
import { Pokemon } from "./components/Pokemon/Pokemon";
import { Favorite } from "./Pages/Favorite/Favorite";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  });

  return (
    <>
      <Navbar />
      <Route exact path="/pokemon/:id" >
        <Pokemon />
      </Route>
      <Route  path="/">
        <LandingPage />
      </Route>
      <Route  path="/home">
        <Pokedex />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route  path="/favorite">
        <Favorite/>
      </Route>
      
    </>
  );
}

export default App;
