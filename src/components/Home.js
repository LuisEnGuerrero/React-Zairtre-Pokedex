import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import title from '../assets/images/International_Pokemon_title.png';
import axios from 'axios';
import Global from '../Global';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const Home = () => {
    const { search } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [loading, setLoading] = useState(true);
    const [rang, setRang] = useState([1, 3]);
    const [error, setError] = useState(null);
    const end = 901;

    // Construir Poke Home
    const getPokeHome = async (inicio, fin) => {
        setLoading(true);
        setError(null);
        try {
            let pokemonArray = [];
            for (let i = inicio; i <= fin; i++) {
                const res = await getListPokemons(i);
                pokemonArray.push(res.data);
            }
            setPokemon(pokemonArray);
        } catch (err) {
            setError('Error al cargar los Pokémon. Inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    // Construir lista paginada para Poke Home
    const getListPokemons = async (id) => {
        const res = await axios.get(`${Global.url}pokemon/${id}`);
        return res;
    };

    const getPagina = (pagina) => {
        let inicio = 1 + pagina;
        let fin = 3 + pagina;
        if (inicio < 0 && fin < end) {
            inicio = inicio + pagina + end;
            fin = fin + pagina + end;
        } else if (fin > end) {
            fin = 3;
            inicio = 1;
            setPagina(0);
        }
        return [inicio, fin];
    };

    const searchPokemon = async (query) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(`${Global.url}pokemon?limit=${end}`);
            const filteredPokemon = res.data.results.filter(p => p.name.includes(query.toLowerCase()));
            const pokemonArray = await Promise.all(filteredPokemon.map(async p => {
                const res = await axios.get(p.url);
                return res.data;
            }));
            setPokemon(pokemonArray);
        } catch (err) {
            setError('Error al buscar los Pokémon. Inténtalo de nuevo más tarde.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (search) {
            searchPokemon(search);
        } else {
            const [inicio, fin] = getPagina(pagina);
            setRang([inicio, fin]);
            getPokeHome(inicio, fin);
        }
    }, [pagina, search]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div id="home">
            <Slider
                title=''
                image={title}
                nameImage="Pokedex Zairtre"
                btn="PokeBox"
                size="slider-big"
            />
            <div className="center">
                <div id="content" className="content-home subheader">
                    <h1 className="subheader">Pokemones del {rang[0]} al {rang[1]}</h1>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <p style={{ color: 'red' }}>{error}</p>
                    ) : (
                        <Row>
                            {pokemon.map(p => (
                                <Col key={p.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <Pokemon pokemon={p} loading={loading} />
                                </Col>
                            ))}
                        </Row>
                    )}
                    <div className="subheader btn-group">
                        <button className="btn btn-primary" type="button" onClick={() => setPagina(pagina - 3)}>Anterior</button>
                        <button className="btn btn-primary" type="button" onClick={() => setPagina(pagina + 3)}>Siguiente</button>
                    </div>
                </div>
                <Sidebar />
            </div> {/* FIN DIV CENTER */}
        </div>
    );
};

export default Home;