import React from 'react';
import Layout from './layout';
import PokemonCard from './componentes/PokemonCard';

const HomePage: React.FC = () => {
    const pokemonList = [
        {
            id: 1,
            name: 'Bulbasaur',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
        {
            id: 2,
            name: 'Ivysaur',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
        },
        {
            id: 3,
            name: 'Venusaur',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        },
        {
            id: 4,
            name: 'Charmander',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        },
        {
            id: 5,
            name: '',
            imageUrl: ''
        },
        {
            id: 6,
            name: '',
            imageUrl: ''
        },
        {
            id: 7,
            name: '',
            imageUrl: ''
        },
        {
            id: 8,
            name: '',
            imageUrl: ''
        },


    ];

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '10px',
                    padding: '20px'
                }}
            >
                <div
                    style={{
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ margin: 0, fontSize: '32px' }}>
                        <span style={{ color: 'red' }}>Poke</span>
                        <span style={{ color: 'black' }}>CoreX</span>
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '20px',
                        justifyContent: 'center',
                        alignItems: 'center',
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