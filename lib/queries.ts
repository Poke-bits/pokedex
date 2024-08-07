
import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetAllPokemon($take: Int) {
    getAllPokemon(take: $take) {
      key
      sprite
    }
  }
`;
