import React from "react";
import { useParams } from "react-router-dom";

function PokemonDetails(props) {
  /**
   * {
   *  pokemonId: 1
   * }
   */
  const { pokemonId } = useParams();
  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  );
  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight: {singlePokemon.weight}</dt>
        <dd></dd>
        <dt>Height: {singlePokemon.height}</dt>
        <dd></dd>
      </dl>
    </>
  );
}

export default PokemonDetails;
