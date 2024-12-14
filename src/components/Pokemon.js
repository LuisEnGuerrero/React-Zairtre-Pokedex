import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon, loading }) => {
    if (!pokemon || !pokemon.sprites) {
        return null; // O puedes mostrar un mensaje de carga o un placeholder
    }

    return (
        <Card className="pokemon-card my-3 p-3 rounded text-center shadow mb-5">
            {loading ? (
                <Card.Img
                    className="pokemon-image"
                    src={pokemon.sprites.front_default}
                    variant='top'
                    style={{ opacity: 0.5 }}
                />
            ) : (
                <Link to={`/pokedex/pokemon/${pokemon.id}`}>
                    <Card.Img
                        className="pokemon-image"
                        src={pokemon.sprites.front_default}
                        variant='top'
                    />
                </Link>
            )}
            <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
                <Link to={`/pokedex/pokemon/${pokemon.id}`} className='link-name'>
                    <Card.Title as='div'>
                        <strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Pokemon;