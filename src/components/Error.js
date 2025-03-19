import React from 'react';
import { NavLink } from 'react-router-dom';
import errorImage from '../logo512.png';

const Error = () => {
    return (
        <section id="content" className="error-page">
            <h2 className="subheader">Página no encontrada!</h2>
            <img src={errorImage} alt="Error" className="error-image" />
            <span>La página a la que intentas acceder <strong>No Existe!</strong></span>
            <NavLink to="/" className="btn-white">Ir al Home</NavLink>
        </section>
    );
}
    
export default Error;