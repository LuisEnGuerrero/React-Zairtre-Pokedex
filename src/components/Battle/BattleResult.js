import React from 'react';
import './BattleResult.css';

const BattleResult = ({ winner, userTrainer, gptTrainer, onRestart }) => {
    return (
        <div className="battle-result-container">
            <h1 className="battle-result-title">¡La Batalla Ha Terminado!</h1>
            <h2 className="battle-winner">
                {winner === 'user'
                    ? `🎉 ¡Felicidades, ${userTrainer.trainerName}! Tú y tu equipo ${userTrainer.teamName} han ganado.`
                    : `🤖 ${gptTrainer.trainerName} y su equipo ${gptTrainer.teamName} han sido los vencedores.`}
            </h2>
            <div className="battle-teams">
                <div className="team-container">
                    <h3>{userTrainer.trainerName}</h3>
                    <ul className="team-list">
                        {userTrainer.selectedPokemons.map((pokemon, index) => (
                            <li key={index} className={`team-pokemon ${pokemon.health > 0 ? 'alive' : 'defeated'}`}>
                                {pokemon.name} (HP: {pokemon.health > 0 ? pokemon.health : 0})
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="team-container">
                    <h3>{gptTrainer.trainerName}</h3>
                    <ul className="team-list">
                        {gptTrainer.selectedPokemons.map((pokemon, index) => (
                            <li key={index} className={`team-pokemon ${pokemon.health > 0 ? 'alive' : 'defeated'}`}>
                                {pokemon.name} (HP: {pokemon.health > 0 ? pokemon.health : 0})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="restart-button" onClick={onRestart}>
                Reiniciar Batalla
            </button>
        </div>
    );
};

export default BattleResult;
