import { useState } from "react";
import PokemonList from "./components/PokemonList";
import NavBar from "./components/NavBar";
import PokemonDetails from "./components/PokemonDetails";
import { Routes, Route } from "react-router-dom";
import PokemonForm from "./components/PokemonForm";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

function App() {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="*" element={<h1>Sorry no matching route</h1>} />
      </Routes>
    </>
  );
}

export default App;
