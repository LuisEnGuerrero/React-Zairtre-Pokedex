import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon, isActive, position }) => {
    if (!pokemon) return null;

    const { name, health, image } = pokemon;
    const healthPercentage = Math.max(0, Math.min(100, health || 100)); // Asegurar valores entre 0 y 100

    return (
        <div className={`pokemon-card ${isActive ? 'active' : ''} ${position}`}>
            <div className="pokemon-info">
                <h3 className="pokemon-name">{name}</h3>
                <div className="pokemon-health">
                    <div
                        className="health-bar"
                        style={{ width: `${healthPercentage}%` }}
                    ></div>
                </div>
                <span className="health-text">{healthPercentage} HP</span>
            </div>
            <div className="pokemon-image">
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
