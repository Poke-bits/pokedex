
import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetAllPokemon($take: Int) {
    getAllPokemon(take: $take) {
      key
      sprite
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query GetPokemon($pokemon: PokemonEnum!) {
  getPokemon(pokemon: $pokemon) {
    sprite
    types {
      name
    }
    weight
    height
    key
  }
}
`;
