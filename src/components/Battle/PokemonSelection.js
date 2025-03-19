import React, { useState, useEffect } from 'react';
import './PokemonSelection.css'; // Estilos específicos para este componente
import Global from '../../Global'; // Importar la URL base de la API
import axios from 'axios'; // Axios para manejar las solicitudes HTTP
//import Sidebar from '../Sidebar';

const PokemonSelection = ({ onSelect }) => {
    const [search] = useState('');
    const [pokemonList, setPokemonList] = useState([]); // Lista completa de Pokémon
    const [filteredPokemons, setFilteredPokemons] = useState([]); // Pokémon filtrados
    const [selectedPokemons, setSelectedPokemons] = useState([]); // Pokémon seleccionados por el usuario

    // Obtener la lista de Pokémon de la API
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`${Global.url}pokemon?limit=150`); // Concatenar URL base
                const formattedPokemons = response.data.results.map((pokemon, index) => ({
                    ...pokemon,
                    id: index + 1, // Asignar un ID único basado en el índice
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`, // Generar la URL de la imagen
                }));
                setPokemonList(formattedPokemons);
                setFilteredPokemons(formattedPokemons); // Inicialmente, mostrar todos
            } catch (error) {
                console.error('Error al cargar la lista de Pokémon:', error);
            }
        };
        fetchPokemons();
    }, []);

    // Filtrar Pokémon basado en la búsqueda
    useEffect(() => {
        setFilteredPokemons(
            pokemonList.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, pokemonList]);

    // Manejar la selección de un Pokémon
    const handleSelect = (pokemon) => {
        if (selectedPokemons.length < 3 && !selectedPokemons.includes(pokemon)) {
            setSelectedPokemons((prev) => [...prev, pokemon]);
        } else if (selectedPokemons.includes(pokemon)) {
            setSelectedPokemons((prev) => prev.filter((p) => p !== pokemon));
        }
    };

    // Confirmar selección
    const handleConfirm = () => {
        if (selectedPokemons.length === 3) {
            onSelect(selectedPokemons);
        } else {
            alert('Debes seleccionar exactamente 3 Pokémon para continuar.');
        }
    };

    return (
        <div className="battle-pokemon-selection center">
            <h2>Selecciona tus 3 Pokémon</h2>
            {/* Buscador de Pokémon */}
            <div className="battle-pokemon-list content">
                {filteredPokemons.map((pokemon) => (
                    <div
                        key={pokemon.name}
                        className={`battle-pokemon-card ${selectedPokemons.includes(pokemon) ? 'selected' : ''}`}
                        onClick={() => handleSelect(pokemon)}
                    >
                        <img src={pokemon.image} alt={pokemon.name} />
                        <span>{pokemon.name}</span>
                    </div>
                ))}
            </div>
            {/* Botón flotante de confirmación */}
            <button onClick={handleConfirm} className="battle-confirm-button">
                Confirmar Selección
            </button>
        </div>
    );
};

export default PokemonSelection;
