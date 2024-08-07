"use client";

import PokemonCardDetails from "../componentes/pokemonCardDetails";

import React from "react";
import "../globals.css";

const pokemonData = {
  name: "Pikachu",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  type: "Electric",
  height: "0.4 m",
  weight: "6.0 kg",
};

const PokemonPage: React.FC = () => {
  return (
    <div>
      <h1>Pokémon Details</h1>

      <PokemonCardDetails pokemon={pokemonData} />

    </div>
  );
};


export default PokemonPage;

