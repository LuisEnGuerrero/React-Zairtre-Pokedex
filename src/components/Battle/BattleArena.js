import React, { useState, useEffect } from 'react';
import TrainerSetup from './TrainerSetup';
import PokemonSelection from './PokemonSelection';
import MoveSelection from './MoveSelection';
import PokemonCard from './PokemonCard';
import Opponent from './Opponent';
import BattleResult from './BattleResult';
import Global from '../../Global';
import axios from 'axios';
import './BattleArena.css';

const BattleArena = () => {
    const [trainer, setTrainer] = useState(null);
    const [gptTrainer, setGptTrainer] = useState({
        trainerName: 'GPT Red',
        teamName: 'AI Squad',
        selectedPokemons: [],
    });
    const [phase, setPhase] = useState('setup'); // 'setup', 'selection', 'battle', 'end'
    const [allPokemons, setAllPokemons] = useState([]);
    const [currentTurn, setCurrentTurn] = useState(null); // 'user' o 'gpt'
    const [battleLog, setBattleLog] = useState([]);
    const [selectedMove, setSelectedMove] = useState(null); // Movimiento seleccionado por el usuario
    const [winner, setWinner] = useState(null); // 'user' o 'gpt'


    // Cargar la lista de Pokémon
    useEffect(() => {
        const fetchAllPokemons = async () => {
            try {
                const response = await axios.get(`${Global.url}pokemon?limit=150`);
                const pokemonList = response.data.results;
        
                // Detallar todos los Pokémon cargados
                const detailedPokemons = await Promise.all(
                    pokemonList.map((pokemon) => fetchPokemonDetails(pokemon))
                );
        
                setAllPokemons(detailedPokemons);
            } catch (error) {
                console.error('Error al cargar la lista de Pokémon:', error);
            }
        };
        fetchAllPokemons();
    }, []);

    useEffect(() => {
        console.log("Pokémon cargados:", allPokemons);
    }, [allPokemons]);
    
    useEffect(() => {
        console.log("Pokémon seleccionados por el usuario:", trainer?.selectedPokemons);
    }, [trainer]);
    
    useEffect(() => {
        console.log("Pokémon seleccionados para GPT:", gptTrainer?.selectedPokemons);
    }, [gptTrainer]);
    

    const handleSetupComplete = ({ trainerName, teamName }) => {
        setTrainer({ trainerName, teamName, selectedPokemons: [] });
        setPhase('selection');
    };

    const fetchPokemonDetails = async (pokemon) => {
        try {
            // Si 'pokemon.url' está disponible, extraer el ID
            const id = pokemon.url ? pokemon.url.split('/').filter(Boolean).pop() : pokemon.id;
    
            const response = await axios.get(`${Global.url}pokemon/${id}`);
            const data = response.data;
    
            return {
                ...data,
                health: 100,
                moves: data.moves?.slice(0, 4).map((m) => m.move) || [{ name: "tackle" }],
                types: data.types || [{ type: { name: "normal" } }],
                sprites: {
                    front_default: data.sprites.front_default,
                    official_artwork: data.sprites.other["official-artwork"].front_default,
                },
            };
        } catch (error) {
            console.error("Error al obtener detalles del Pokémon:", error);
            return {
                name: pokemon.name || "Desconocido",
                health: 100,
                moves: [{ name: "tackle" }],
                types: [{ type: { name: "normal" } }],
                sprites: {
                    front_default: "ruta-a-imagen-predeterminada",
                    official_artwork: "ruta-a-imagen-predeterminada",
                },
            };
        }
    };
    

    const selectRandomPokemonsForGpt = async () => {
        const shuffled = [...allPokemons].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
    
        console.log("Pokémon seleccionados para GPT (antes de detallar):", selected);
    
        const detailedPokemons = await Promise.all(
            selected.map((pokemon) => fetchPokemonDetails(pokemon))
        );
    
        console.log("Pokémon seleccionados para GPT (después de detallar):", detailedPokemons);
    
        return detailedPokemons.map((p) => ({
            ...p,
            health: 100,
            image: p.sprites.official_artwork || p.sprites.front_default,
        }));
    };    
    

    const handlePokemonSelection = async (selectedPokemons) => {
        const detailedPokemons = await Promise.all(
            selectedPokemons.map((pokemon) => fetchPokemonDetails(pokemon))
        );
    
        setTrainer((prev) => ({
            ...prev,
            selectedPokemons: detailedPokemons.map((p) => ({
                ...p,
                health: 100,
                image: p.sprites.official_artwork || p.sprites.front_default,
            })),
        }));
    
        const gptPokemons = await selectRandomPokemonsForGpt();
        console.log("Pokémon GPT detallados:", gptPokemons);
    
        setGptTrainer((prev) => ({
            ...prev,
            selectedPokemons: gptPokemons,
        }));
    
        setPhase('battle');
        decideFirstTurn();
    };
    

    const decideFirstTurn = () => {
        const coinFlip = Math.random() > 0.5 ? 'user' : 'gpt';
        setCurrentTurn(coinFlip);
        setBattleLog((prev) => [
            ...prev,
            `El turno inicial es para: ${coinFlip === 'user' ? trainer.trainerName : gptTrainer.trainerName}`,
        ]);
    };

    const getEffectiveness = (attackerType, defenderType) => {
        const typeEffectiveness = {
            fire: { strongAgainst: ['grass'], weakAgainst: ['water'] },
            water: { strongAgainst: ['fire'], weakAgainst: ['electric', 'grass'] },
            grass: { strongAgainst: ['water'], weakAgainst: ['fire'] },
            electric: { strongAgainst: ['water'], weakAgainst: ['ground'] },
            normal: { strongAgainst: [], weakAgainst: ["fighting"]},
            ice: { strongAgainst: ["grass", "ground", "flying", "dragon"], weakAgainst: ["fire", "fighting", "rock", "steel"] },
            fighting: { strongAgainst: ["normal", "ice", "rock", "dark", "steel"], weakAgainst: ["flying", "psychic", "fairy"] },
            poison: { strongAgainst: ["grass", "fairy"], weakAgainst: ["ground", "psychic"] },
            ground: { strongAgainst: ["fire", "electric", "poison", "rock", "steel"], weakAgainst: ["water", "grass", "ice"] },
            flying: { strongAgainst: ["grass", "fighting", "bug"], weakAgainst: ["electric", "ice", "rock"] },
            psychic: { strongAgainst: ["fighting", "poison"], weakAgainst: ["bug", "ghost", "dark"] },
            bug: { strongAgainst: ["grass", "psychic", "dark"], weakAgainst: ["fire", "flying", "rock"] },
            rock: { strongAgainst: ["fire", "ice", "flying", "bug"], weakAgainst: ["water", "grass", "fighting", "ground", "steel"] },
            ghost: { strongAgainst: ["psychic", "ghost"], weakAgainst: ["ghost", "dark"] },
            dragon: { strongAgainst: ["dragon"], weakAgainst: ["ice", "dragon", "fairy"] },
            dark: { strongAgainst: ["psychic", "ghost"], weakAgainst: ["fighting", "bug", "fairy"] },
            steel: { strongAgainst: ["ice", "rock", "fairy"], weakAgainst: ["fire", "fighting", "ground"] },
            fairy: { strongAgainst: ["fighting", "dragon", "dark"], weakAgainst: ["poison", "steel"] }
        };

        if (typeEffectiveness[attackerType]?.strongAgainst.includes(defenderType)) {
            return 2; // Daño doble
        }
        if (typeEffectiveness[attackerType]?.weakAgainst.includes(defenderType)) {
            return 0.5; // Daño reducido
        }
        return 1; // Daño neutral
    };

    const calculateDamage = (attacker, defender, move) => {
        if (!attacker.types || !attacker.types[0] || !defender.types || !defender.types[0]) {
            console.error("Datos incompletos en attacker o defender.");
            return 0; // Daño nulo si los datos no están completos
        }
    
        const baseDamage = Math.floor(Math.random() * 20) + 10;
        const attackerType = attacker.types[0].type.name; // Tipo principal
        const defenderType = defender.types[0].type.name; // Tipo principal del defensor
        const effectiveness = getEffectiveness(attackerType, defenderType);
        return Math.floor(baseDamage * effectiveness); // Ajustar daño según efectividad
    };

    const userAttack = () => {
        if (!selectedMove) {
            alert('Selecciona un movimiento antes de atacar.');
            return;
        }

        const userPokemon = trainer.selectedPokemons[0];
        const gptPokemon = gptTrainer.selectedPokemons[0];

        if (!userPokemon || !gptPokemon) {
            console.error("No se pudo obtener el Pokémon atacante o defensor.");
            return;
        }
    
        const damage = calculateDamage(userPokemon, gptPokemon, selectedMove);

        gptPokemon.health -= damage;

        setBattleLog((prev) => [
            ...prev,
            `${trainer.trainerName}'s ${userPokemon.name} usó ${selectedMove.name}, causando ${damage} puntos de daño a ${gptPokemon.name}.`,
        ]);

        checkBattleStatus();
        setSelectedMove(null); // Reiniciar movimiento seleccionado
        setCurrentTurn('gpt');
    };

    const gptAttack = () => {
        const gptPokemon = gptTrainer.selectedPokemons[0];
        const userPokemon = trainer.selectedPokemons[0];
    
        if (!gptPokemon || !gptPokemon.moves || gptPokemon.moves.length === 0) {
            console.error("El Pokémon GPT no tiene movimientos válidos.", gptPokemon);
            setBattleLog((prev) => [
                ...prev,
                `¡${gptTrainer.trainerName}'s ${gptPokemon?.name || "Pokémon desconocido"} no puede atacar porque no tiene movimientos válidos!`,
            ]);
            setCurrentTurn('user');
            return;
        }
    
        const move = gptPokemon.moves[0]; // Selecciona el primer movimiento
        const damage = calculateDamage(gptPokemon, userPokemon, move);
    
        userPokemon.health -= damage;
    
        setBattleLog((prev) => [
            ...prev,
            `${gptTrainer.trainerName}'s ${gptPokemon.name} usó ${move.name}, causando ${damage} puntos de daño a ${userPokemon.name}.`,
        ]);
    
        checkBattleStatus();
        setCurrentTurn('user');
    };
    

    const checkBattleStatus = () => {
        const userPokemon = trainer.selectedPokemons[0];
        const gptPokemon = gptTrainer.selectedPokemons[0];

        if (userPokemon.health <= 0) {
            trainer.selectedPokemons.shift(); // Retirar Pokémon derrotado
            setBattleLog((prev) => [
                ...prev,
                `${trainer.trainerName}'s ${userPokemon.name} ha sido derrotado.`,
            ]);
        }

        if (gptPokemon.health <= 0) {
            gptTrainer.selectedPokemons.shift(); // Retirar Pokémon derrotado
            setBattleLog((prev) => [
                ...prev,
                `${gptTrainer.trainerName}'s ${gptPokemon.name} ha sido derrotado.`,
            ]);
        }

        if (trainer.selectedPokemons.length === 0) {
            endBattle('gpt');
        } else if (gptTrainer.selectedPokemons.length === 0) {
            endBattle('user');
        }
    };

    const endBattle = (winningSide) => {
        setBattleLog((prev) => [
            ...prev,
            `La batalla ha terminado. El ganador es: ${winningSide === 'user' ? trainer.trainerName : gptTrainer.trainerName
            }`,
        ]);
        setWinner(winningSide); // Define el ganador
        setPhase('end'); // Cambia la fase a "end"
    };

    const restartGame = () => {
        setTrainer(null);
        setGptTrainer({
            trainerName: 'GPT Red',
            teamName: 'AI Squad',
            selectedPokemons: [],
        });
        setPhase('setup');
        setBattleLog([]);
        setWinner(null); // Reinicia el ganador
    };



    return (
        <div className="battle-arena">
            {phase === 'setup' && <TrainerSetup onSetupComplete={handleSetupComplete} />}
            {phase === 'selection' && (
                <PokemonSelection
                    onSelect={handlePokemonSelection}
                    availablePokemons={allPokemons}
                />
            )}
            {phase === 'battle' && (
                <div className="battle-phase">
                    <div className="trainer-side">
                        <PokemonCard
                            pokemon={{
                                ...trainer.selectedPokemons[0],
                                image: trainer.selectedPokemons[0]?.sprites?.front_default || "ruta-a-imagen-predeterminada",
                            }}
                            isActive={currentTurn === 'user'}
                        />
                        <h3>{trainer.trainerName}</h3>
                    </div>
                    <div className="opponent-side">
                        <Opponent
                            trainerName={gptTrainer.trainerName}
                            teamName={gptTrainer.teamName}
                            selectedPokemons={gptTrainer.selectedPokemons}
                        />
                    </div>
                    {currentTurn === 'user' && (
                        <MoveSelection
                            moves={trainer.selectedPokemons[0].moves}
                            onSelectMove={setSelectedMove}
                        />
                    )}
                    <button onClick={currentTurn === 'user' ? userAttack : gptAttack}>
                        {currentTurn === 'user' ? 'Atacar' : 'Esperar'}
                    </button>
                    <div className="battle-log">
                        <h3>Registro de la Batalla</h3>
                        <ul>
                            {battleLog.map((log, index) => (
                                <li key={index}>{log}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {phase === 'end' && (
                <BattleResult
                    winner={winner}
                    userTrainer={trainer}
                    gptTrainer={gptTrainer}
                    onRestart={restartGame}
                />
            )}
        </div>
    );
};

export default BattleArena;
