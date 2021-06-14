import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Global from '../Global';
import Sidebar from './Sidebar';


const PokemonPage = ({ match }) => {

    const id = match.params.id;
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemon = async (id) => {

        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(Global.url + `pokemon/${id}`);
        return res;

    }

    useEffect(() => {
        getPokemon(id);
        
    }, [])

    return (
        <div className="center">
            <div id="content">
                <h1 className="subheader">Ficha de Características!</h1>

                {loading ? (
                    <Loader />
                ) : (
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card
                                className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white"
                                style={{ border: 'none' }}
                            >
                                <Link to={`/pokedex/pokemon/${pokemonDetails.id}`}>

                                    <Card.Img
                                        style={{ width: '22rem' }}
                                        src={pokemonDetails.sprites.front_default}
                                        variant='top'
                                    />
                                </Link>
                                <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white`}>
                                    <Link to={`/pokedex/pokemon/${pokemonDetails.id}`} className='link-name'>
                                        <Card.Title as='div'>
                                            <strong>#{pokemonDetails.id+' '}{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                                        </Card.Title>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Card
                                className="p-3 rounded text-center shadow p-3 mb-5 bg-white"
                                style={{ border: 'none' }}
                            >
                                <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            {pokemonDetails.types.map(t => (
                                                <Col key={t.type.name}>
                                                    <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                                        {t.type.name.toUpperCase()}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Img style={{ width: '13rem' }} src={pokemonDetails.sprites.front_default} />
                                                <Card.Text>Aspecto Normal</Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Img style={{ width: '15rem' }} src={pokemonDetails.sprites.front_shiny} />
                                                <Card.Text>Aspecto Brillante</Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <div
                                                    className="px-4 py-1 rounded"
                                                    style={{ border: '1px black solid' }}
                                                >
                                                    Habilidades
                                            </div>
                                            </Col>

                                        </Row>
                                        <Row className="text-center">
                                            {pokemonDetails.abilities.map(a => (
                                                <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                    <div className="rounded px-4 py-1">
                                                        {a.ability.name.toLowerCase()}
                                                    </div>
                                                </Col>
                                            ))}

                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </div>
            <Sidebar
                blog="true"
            />

        </div>
    )
}



export default PokemonPage;
;