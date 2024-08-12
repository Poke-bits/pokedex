
"use client";

import PokemonCardDetails from "../../../components/pokemonCardDetails";
import client from "../../../../lib/apolloClient";
import { GET_POKEMON_DETAILS } from "../../../../lib/queries";
import React from "react";
import { useParams } from 'next/navigation'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

const PokemonText = styled.span`
  color: black;
`;

const DetailsText = styled.span`
  color: red;
`;

export const PokemonPage: React.FC = (prop) => {
  console.log(prop)
  const params = useParams()
  const name = params.name;

  const loadPokemon = async (name: string) => {
    const { data } = await client.query({
      query: GET_POKEMON_DETAILS,
      variables: {
        pokemon: name,
      },
    });
    return data;
  };

  const transformData = (data: any) => {
    return {
      name: data.getPokemon.key,
      image: data.getPokemon.sprite,
      type: data.getPokemon.types[0].name,
      height: data.getPokemon.height,
      weight: data.getPokemon.weight,
    };
  };

  const [pokemonData, setPokemonData] = React.useState<any>(null);

  React.useEffect(() => {
    if (name) {
      loadPokemon(name as string).then((data) => {
        setPokemonData(transformData(data));
      });
    }
  }, [name]);

  if (!pokemonData) return <p>Loading...</p>;

  return (
    <div>
      <Title>
        <PokemonText>Pokémon</PokemonText> <DetailsText>Details</DetailsText>
      </Title>
      <PokemonCardDetails pokemon={pokemonData} />
    </div>
  );
};

export default PokemonPage;
