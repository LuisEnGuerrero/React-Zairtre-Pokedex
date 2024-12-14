import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <section id="content" className="error-page">
            <h2 className="subheader">Página no encontrada!</h2>
            <p>La página a la que intentas acceder <strong>No Existe!</strong></p>
            <NavLink to="/" className="btn-white">Ir al Home</NavLink>
        </section>
    );
}

export default Error;