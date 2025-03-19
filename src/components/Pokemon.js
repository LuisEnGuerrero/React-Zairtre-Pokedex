import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon, loading }) => {
  if (!pokemon || !pokemon.sprites) return null;

  return (
    <Card className="pokemon-card my-3 rounded text-center shadow mb-5">
      {loading ? (
        <Card.Img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          variant="top"
          style={{ opacity: 0.5 }}
        />
      ) : (
        <Link to={`/pokedex/pokemon/${pokemon.id}`}>
          <Card.Img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            variant="top"
          />
        </Link>
      )}
      <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>
        <Card.Title as="div">
          <Link to={`/pokedex/pokemon/${pokemon.id}`} className="link-name">
            <strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong>
          </Link>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="card-footer-custom">
        <Link to={`/pokedex/pokemon/${pokemon.id}`} className="btn btn-primary btn-sm">
          Ver Detalle
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Pokemon;
