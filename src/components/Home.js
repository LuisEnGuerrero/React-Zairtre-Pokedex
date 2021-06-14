import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import title from '../assets/images/International_Pokemon_title.png';
import axios from 'axios';
import Global from '../Global';
import { Row, Col } from 'react-bootstrap';
import Pokemon from './Pokemon';
import Loader from './Loader';



const Home = () => {


    const [pokemon, setPokemon] = useState([]);
    let [pagina, setPagina] = useState(0);
    const [loading, setLoading] = useState(true);
    let fin = 3;
    let inicio = 1;
    let end = 901;

    //Construir Poke Home
    const getPokeHome = async () => {

        let pokemonArray = [];

        for (let i = rang[0]; i <= rang[1]; i++) {
            pokemonArray.push(await getListPokemons(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);
    }


    //Construir lista paginada para Poke Home
    const getListPokemons = async (id) => {
        const res = await axios.get(Global.url+`pokemon/${id}`)
        return res;
    }

    const getPagina = () => {
        inicio = inicio + pagina;
        fin = fin + pagina;
        if (inicio<0 && fin<end){
            inicio=inicio+pagina+end;
            fin=fin+pagina+end;
        }else if (fin>end){
            fin = 3;
            inicio = 1;
            pagina=0;
                    }
        return [inicio, fin];
    }
    const rang=getPagina();

    

    useEffect(() => {
        getPokeHome();


    }, [pagina])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div id="home">

            <Slider
                title=''
                image={title}
                /*title="Gracias por visitarme! Este Sitio está Diseñado con React!"*/
                btn="PokeBox"
                size="slider-big"
            />

            <div className="center">

                <div id="content" className="content-home subheader">
                    <h1 className="subheader">Pokemones del {rang[0]} al {rang[1]}</h1>
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

                    <div className="subheader btn-group">
                        <button className="btn btn-primary" type="button" onClick={() => setPagina(pagina -3)}>Anterior</button>
                        <button className="btn btn-primary" type="button" onClick={() => setPagina(pagina +3)}>Siguiente</button>
                    </div>
                </div>

                <Sidebar />

            </div> {/* FIN DIV CENTER */}


        </div>
    );

}

export default Home;