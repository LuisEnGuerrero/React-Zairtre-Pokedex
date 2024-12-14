import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Loader from './Loader';

const PokeBox = () => {
    const [pokemon, setPokemon] = useState([]); // Estado para almacenar los Pokémon encontrados
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(false); // Estado para manejar errores

    // Función para obtener la lista completa de Pokémon
    const getPokemonList = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(`${Global.url}pokemon?limit=258`);
            const pokemonArray = await Promise.all(res.data.results.map(async p => {
                const res = await axios.get(p.url);
                return res.data;
            }));
            setPokemon(pokemonArray);
        } catch (err) {
            setError('Error al cargar los Pokémon. Inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    // useEffect para manejar la carga inicial
    useEffect(() => {
        getPokemonList(); // Obtener la lista completa de Pokémon
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id="pokebox">
            <div className="center">
                <div>
                    {loading ? (
                        <Loader /> // Mostrar el componente Loader mientras se cargan los datos
                    ) : error ? (
                        <div className="error">{error}</div> // Mostrar el mensaje de error si ocurre un error
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
            </div> {/* FIN DIV CENTER */}
        </div>
    );
};

export default PokeBox;