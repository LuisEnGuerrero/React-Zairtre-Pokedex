import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Global from '../Global';
import Sidebar from './Sidebar';

const PokemonPage = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getPokemon = useCallback(async (id) => {
        try {
            setLoading(true);
            setError(false);
            const details = await getPokemonData(id);
            setPokemonDetails(details.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, []);

    const getPokemonData = async (id) => {
        const res = await axios.get(Global.url + `pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [id, getPokemon]);

    return (
        <div className="center">
            <div id="content">
                <h1 className="subheader">Ficha de Características!</h1>

                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className="error">No se pudo encontrar el Pokémon con ID: {id}</div>
                ) : (
                    <Row>
                        <Col xs={12}>
                            <Card className="pokemon-card my-3 p-3 rounded text-center shadow mb-5">
                                <Card.Img
                                    className="pokemon-image"
                                    src={pokemonDetails.sprites.front_default}
                                    variant='top'
                                />
                                <Card.Body className={`${pokemonDetails.types[0].type.name} rounded text-white`}>
                                    <Card.Title as='div'>
                                        <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12}>
                            <Card className="pokemon-details-card p-3 rounded text-center shadow mb-5">
                                <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            {pokemonDetails.types.map(t => (
                                                <Col key={t.type.name}>
                                                    <div className={`${t.type.name} rounded px-4 py-1 type-badge`}>
                                                        {t.type.name.toUpperCase()}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Card.Img className="pokemon-sprite" src={pokemonDetails.sprites.front_default} />
                                                <Card.Text>Aspecto Normal</Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Img className="pokemon-sprite" src={pokemonDetails.sprites.front_shiny} />
                                                <Card.Text>Aspecto Brillante</Card.Text>
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col xs={12}>
                                                <div className="section-title">Habilidades</div>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            {pokemonDetails.abilities.map(a => (
                                                <Col key={a.ability.name} xs={6}>
                                                    <div className="ability-badge">
                                                        {a.ability.name.toLowerCase()}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row className="mt-4">
                                            <Col xs={12}>
                                                <div className="section-title">Estadísticas Base</div>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            {pokemonDetails.stats.map(s => (
                                                <Col key={s.stat.name} xs={6}>
                                                    <div className="stat-badge">
                                                        {s.stat.name.toLowerCase()}: {s.base_stat}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row className="mt-4">
                                            <Col xs={12}>
                                                <div className="section-title">Movimientos</div>
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            {pokemonDetails.moves.slice(0, 10).map(m => (
                                                <Col key={m.move.name} xs={6}>
                                                    <div className="move-badge">
                                                        {m.move.name.toLowerCase()}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row className="mt-4">
                                            <Col xs={6}>
                                                <div className="info-badge">
                                                    Peso: {pokemonDetails.weight / 10} kg
                                                </div>
                                            </Col>
                                            <Col xs={6}>
                                                <div className="info-badge">
                                                    Altura: {pokemonDetails.height / 10} m
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </div>
            <Sidebar blog="true" />
        </div>
    )
}

export default PokemonPage;