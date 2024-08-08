
'use client';

import React, { useState, useEffect } from "react";
import Layout from "./layout";
import PokemonCard from "../components/PokemonCard";
import client from "../../lib/apolloClient";
import { GET_POKEMONS } from "../../lib/queries";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);

  const take = 10;

  const loadPokemon = async (page: number) => {
    const { data } = await client.query({
      query: GET_POKEMONS,
      variables: { take, skip: (page - 1) * take },
    });
    const transformData = (data: any): Pokemon[] => {
      return data.getAllPokemon.map((pokemon: any, index: number) => ({
        id: index + pokemon.key,
        name: pokemon.key,
        imageUrl: pokemon.sprite,
      }));
    };
    setPokemonList((prev) => [...prev, ...transformData(data)]);
  };

  useEffect(() => {
    loadPokemon(page);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "10px",
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
          {pokemonList.map((pokemon, key) => (
            <PokemonCard
              key={key}
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
