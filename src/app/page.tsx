import React from "react";
import Layout from "./layout";
import PokemonCard from "./componentes/PokemonCard";
import client from "../../lib/apolloClient";
import { GET_POKEMONS } from "../../lib/queries";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const HomePage: React.FC = async () => {
  const take = 5;
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { take },
  });
  const transformData = (data: any): Pokemon[] => {
    return data.getAllPokemon.map((pokemon: any, index: number) => ({
      id: index + 1,
      name: pokemon.key,
      imageUrl: pokemon.sprite,
    }));
  };
const pokemonList: Pokemon[] = transformData(data)
 

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "32px" }}>
            <span style={{ color: "red" }}>Poke</span>
            <span style={{ color: "black" }}>CoreX</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pokemonList.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
