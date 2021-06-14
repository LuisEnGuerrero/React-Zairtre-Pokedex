import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/images/SoyLuisEnrique.jpg';

const Intro = () => {
    return (
        <div className="card mb-3 card text-white bg-secondary mb-3 margin-top-7">
            <div className="row g-0">
                <div className="col-md-4 p-4">
                    <img src={picture} alt="SoyLuisEnrique" width="95%"></img>
                </div>
            
                <div className="col-md-8 padding-5">
                    <div className="card-body text-start">
                        <span className="display-2">HOLA!!!</span>
                        <h1 className="margin-0 text-xl-start">Yo Soy Luis Enrique!</h1>
                        <div className="text-md-start blockquote">
                        <p>
                            Web developer &
                        </p>
                        <p>
                            <strong>Máster en Frameworks</strong> para JavaScript
                        </p>
                        </div>
                    </div>
                    <Link to="/formulario" className="btn btn-secondary btn-lg">Escríbeme!</Link>

                </div>

            </div>
        </div>
    )
}

export default Intro
