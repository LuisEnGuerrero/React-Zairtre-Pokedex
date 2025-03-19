import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
    render() {
        return (
            <div id="formulario">
                <Slider title="Escríbeme" size="slider-small" />

                <div className="center">
                    <div id="content" className="clearfix">
                        {/* Mensaje informativo opcional */}
                        <div id="user-info" className="mb-3 px-3">
                            <h3>Por favor, llena el formulario para enviarnos tu feedback.</h3>
                        </div>

                        {/* Formulario de feedback usando Formspree */}
                        <form
                            className="mid-form"
                            action="https://formspree.io/f/mvgkzpal"
                            method="POST"
                        >
                            <div className="form-group mb-3">
                                <label htmlFor="nombre">Nombre Completo:</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    placeholder="Ingresa tu nombre completo"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="correo">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    name="correo"
                                    className="form-control"
                                    placeholder="ejemplo@dominio.com"
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea
                                    name="mensaje"
                                    className="form-control"
                                    placeholder="Escribe tu mensaje aquí..."
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group rating mb-3">
                                <label>Califica tu experiencia</label>
                                <div className="stars">
                                    <input type="radio" id="star5" name="rating" value="5" required />
                                    <label htmlFor="star5" title="5 estrellas">&#9733;</label>
                                    <input type="radio" id="star4" name="rating" value="4" />
                                    <label htmlFor="star4" title="4 estrellas">&#9733;</label>
                                    <input type="radio" id="star3" name="rating" value="3" />
                                    <label htmlFor="star3" title="3 estrellas">&#9733;</label>
                                    <input type="radio" id="star2" name="rating" value="2" />
                                    <label htmlFor="star2" title="2 estrellas">&#9733;</label>
                                    <input type="radio" id="star1" name="rating" value="1" />
                                    <label htmlFor="star1" title="1 estrella">&#9733;</label>
                                </div>
                            </div>              {/* Campo oculto opcional para redireccionar a tu correo en el backend o para identificar el destino */}
                            <input type="hidden" name="_subject" value="Nuevo mensaje desde tu Pokedex" />
                            <input type="hidden" name="_replyto" value="luisenguerrero.cm@gmail.com" />
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>
                    <Sidebar blog="false" />
                </div>
            </div>
        );
    }
}

export default Formulario;
