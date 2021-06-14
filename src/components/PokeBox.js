import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Loader from './Loader';




const PokeBox = () => 
{

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    
    
    //Construir Pokedex
    const getPokemonList = async () => {

        let pokemonArray = [];
        for (let i = 1; i <= 258; i++) {
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);

    }

    //Construir PokemonPage
    const getPokemonData = async (id) => {

        const res = await axios.get(Global.url+`pokemon/${id}`);
        return res;
    }


    useEffect ( () => {
        getPokemonList();
    }, [])

    return (
        
        <div id="pokebox">


            <div className="center">



                <div>
                    {/* LISTADO de Pokemons que vienen del API REST de Pokeapi.io */}
                    {loading ? (
                        <Loader/>
                    ) : (
                        <Row>
                            {pokemon.map (p => (
                                <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                                    <Pokemon pokemon={p.data}/>
                                </Col>
                            ))}
                        </Row>
                    )}

                </div>



            </div> {/* FIN DIV CENTER */}


        </div>

    );
}

export default PokeBox;