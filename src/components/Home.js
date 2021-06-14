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
    const [pagina, setPagina] = useState(0);
    const [loading, setLoading] = useState(true);
    let fin = 3;
    let inicio = 1;

    //Construir Poke Home
    const getPokeHome = async () => {

        let pokemonArray = [];

        if (inicio>0 && fin<=258 && inicio<fin){
            inicio=Math.abs(inicio+pagina);
            fin=Math.abs(fin+pagina);
        }else{
            inicio=Math.abs(fin+pagina);
            fin=Math.abs(inicio+pagina);
        }

        for (let i = inicio; i <= fin; i++) {
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

    

    useEffect(() => {
        getPokeHome();

    }, [pagina])


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
                    <h1 className="subheader">Pokemones del {Math.abs(inicio + pagina)} al {Math.abs(fin + pagina)}</h1>
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