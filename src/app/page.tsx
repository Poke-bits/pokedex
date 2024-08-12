'use client';

import React, { useState, useEffect } from "react";
import Layout from "./layout";
import PokemonCard from "../components/PokemonCard";
import client from "../../lib/apolloClient";
import { GET_POKEMONS } from "../../lib/queries";
import styled from 'styled-components';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 10px;
  padding: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 32px;
`;

const RedSpan = styled.span`
  color: red;
`;

const BlackSpan = styled.span`
  color: black;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-content: center;
  align-items: center;
`;

const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);

  const take = 3;

  const loadPokemon = async (page: number) => {
    const { data } = await client.query({
      query: GET_POKEMONS,
      variables: { take, skip: (page - 1) * take },
    });
    const transformData = (data: any): Pokemon[] => {
      return data.getAllPokemon.map((pokemon: any, index: number) => ({
        id: index,
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
      <Container>
        <Header>
          <Title>
            <RedSpan>Poke</RedSpan>
            <BlackSpan>CoreX</BlackSpan>
          </Title>
        </Header>
        <GridContainer>
          {pokemonList.map((pokemon, key) => (
            <PokemonCard
              key={key}
              id={pokemon.id}
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </GridContainer>
      </Container>
    </Layout>
  );
};

export default HomePage;
