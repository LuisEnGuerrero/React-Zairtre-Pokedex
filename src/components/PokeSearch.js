import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import Slider from './Slider';
import Sidebar from './Sidebar'; // Importar Sidebar
import gearImage from '../assets/images/gear.png'; // Importar la imagen

const PokeSearch = () => {
    const { search } = useParams(); // Obtener el término de búsqueda desde los parámetros de la URL
    const [pokemon, setPokemon] = useState([]); // Estado para almacenar los Pokémon encontrados
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(false); // Estado para manejar errores

    // Función para buscar Pokémon por ID
    const searchPokemonById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(`${Global.url}pokemon/${id}`);
            setPokemon([res.data]);
        } catch (err) {
            setError('Error al buscar el Pokémon. Inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    // Función para buscar Pokémon por detalles (nombre, tipos, habilidades, movimientos)
    const searchPokemonByDetails = async (query) => {
        setLoading(true);
        setError(null);
        console.log('Clave de Búsqueda: ', query);
        try {
            // Obtener la lista de Pokémon
            const res = await axios.get(`${Global.url}pokemon?limit=258`);
            // Obtener los detalles de cada Pokémon
            const pokemonArray = await Promise.all(res.data.results.map(async p => {
                const res = await axios.get(p.url);
                console.log(res.data);
                return res.data;
            }));
            // Filtrar los Pokémon según el término de búsqueda
            const filteredPokemon = pokemonArray.filter(p =>
                p.name.includes(query.toLowerCase()) ||
                p.types.some(t => t.type.name.includes(query.toLowerCase())) ||
                p.abilities.some(a => a.ability.name.includes(query.toLowerCase())) ||
                p.moves.some(m => m.move.name.includes(query.toLowerCase()))
            );
            setPokemon(filteredPokemon);
        } catch (err) {
            setError('Error al buscar los Pokémon. Inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    // useEffect para manejar la búsqueda cuando cambia el término de búsqueda
    useEffect(() => {
        if (isNaN(search)) {
            searchPokemonByDetails(search); // Buscar por detalles si el término no es un número
        } else {
            searchPokemonById(search); // Buscar por ID si el término es un número
        }
    }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id="blog">
            <Slider
                title="Resultados de Búsqueda"
                size="slider-small"
            />

            <div className="center">
                <div id="content">

                    {loading ? (
                        <Loader /> // Mostrar el componente Loader mientras se cargan los datos
                    ) : error ? (
                        <div className="error">{error}</div> // Mostrar el mensaje de error si ocurre un error
                    ) : pokemon.length === 0 ? (
                        <div className="no-results">
                            <img src={gearImage} alt="No results" className="no-results-image" />
                            <p className="no-results-text">No se encontraron resultados para la búsqueda. <br />Por favor, intenta con una clave diferente.</p>
                        </div>
                    ) : (
                        <Row>
                            {pokemon.map((p) => (
                                <Col key={p.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <Pokemon pokemon={p} /> {/* Mostrar cada Pokémon encontrado */}
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>
                <Sidebar blog="true" />
            </div> {/* FIN DIV CENTER */}
        </div>
    );
};

export default PokeSearch;