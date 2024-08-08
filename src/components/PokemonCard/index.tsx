import React from 'react';
import Link from 'next/link';

interface PokemonCardProps {
    id: number;
    name: string;
    imageUrl: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
    return (
        <div
            style={{
                background: '#333333',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                maxWidth: '200px',
                width: '100%',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                margin: '10px'
            }}
        >
            <img
                src={imageUrl}
                alt={name}
                style={{ width: '100%', borderRadius: '10px 10px 0 0' }}
            />
            <div style={{ padding: '10px 0' }}>
                <div
                    style={{
                        background: '#ff0000',
                        color: '#fff',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        marginBottom: '10px',
                        display: 'inline-block',
                    }}
                >
                    #{id}
                </div>
                <h3 style={{ color: '#fff', margin: '10px 0' }}>{name}</h3>
                <Link href={`/pokemon/${name}`}>
                    <button
                        style={{
                            background: '#d3d3d3',
                            color: '#000',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}
                    >
                        Detalhes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PokemonCard;
