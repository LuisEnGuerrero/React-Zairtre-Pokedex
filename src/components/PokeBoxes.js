import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';

class PokeBoxes extends Component {
    state = {
        pokemon: [],
        status: null
    };

    componentDidMount() {
        this.getPokemonList();
    }

    getPokemonList = async () => {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=258');
            const pokemonArray = await Promise.all(
                res.data.results.map(async (pokemon) => {
                    const pokemonData = await axios.get(pokemon.url);
                    return pokemonData.data;
                })
            );
            this.setState({ pokemon: pokemonArray, status: 'success' });
        } catch (error) {
            this.setState({ status: 'error' });
        }
    };

    render() {
        const { pokemon, status } = this.state;

        return (
            <div id="pokebox">
                <Slider
                    title="PokeBox"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Pokedex:</h1>
                        {/* LISTADO de Pokemons que vienen del API REST de Pokeapi.io */}
                        {status === 'success' ? (
                            <div>
                                {pokemon.map((p) => (
                                    <div key={p.name}>
                                        <h2>{p.name}</h2>
                                        <img src={p.sprites.front_default} alt={p.name} />
                                    </div>
                                ))}
                            </div>
                        ) : status === 'error' ? (
                            <div className="error">No se pudieron cargar los Pokémon. Inténtalo de nuevo más tarde.</div>
                        ) : (
                            <div>Cargando...</div>
                        )}
                    </div>

                    <Sidebar blog="true" />
                </div> {/* FIN DIV CENTER */}
            </div>
        );
    }
}

export default PokeBoxes;