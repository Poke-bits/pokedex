
import React from 'react';
import styled from 'styled-components';

interface PokemonProps {
  pokemon: {
    name: string;
    image: string;
    type: string;
    height: string;
    weight: string;
  };
}

const Card = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 300px;
  margin: 20px auto;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const Details = styled.p`
  font-size: 16px;
  color: #333;
`;

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <Card>
      <Image src={pokemon.image} alt={pokemon.name} />
      <Title>{pokemon.name}</Title>
      <Details>Type: {pokemon.type}</Details>
      <Details>Height: {pokemon.height}</Details>
      <Details>Weight: {pokemon.weight}</Details>
    </Card>
  );
};

export default PokemonCard;
