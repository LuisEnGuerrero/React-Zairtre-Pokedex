import React from 'react';
import PokemonCard from './PokemonCard';
import './Opponent.css';

const Opponent = ({ trainerName, teamName, selectedPokemons = [] }) => {
    // Asegurarnos de que selectedPokemons siempre sea un array
    const activePokemon = selectedPokemons.length > 0 ? selectedPokemons[0] : null;
    const otherPokemons = selectedPokemons.slice(1);

    return (
        <div className="opponent-container">
            <h2 className="opponent-name">{trainerName || 'Oponente'}</h2>
            <h3 className="opponent-team">Equipo: {teamName || 'Sin equipo'}</h3>

            {activePokemon ? (
                <div className="opponent-active">
                    <h4>Pokémon activo:</h4>
                    <PokemonCard pokemon={activePokemon} isActive={true} />
                </div>
            ) : (
                <h4 className="opponent-status">¡Todos los Pokémon han sido derrotados!</h4>
            )}

            {otherPokemons.length > 0 && (
                <div className="opponent-backup">
                    <h4>Pokémon de reserva:</h4>
                    <div className="opponent-pokemon-list">
                        {otherPokemons.map((pokemon, index) => (
                            <PokemonCard key={index} pokemon={pokemon} isActive={false} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Opponent;
