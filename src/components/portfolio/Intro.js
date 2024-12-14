import React from 'react';
import picture from '../../assets/images/SoyLuisEnrique.jpg';

const Intro = () => {
    const mailtoLink = "mailto:LuisEnGuerrero@yahoo.com?subject=Te%20escribo%20desde%20tu%20página:%20React%20Zairtre%20Pokedex!";

    return (
        <div className="card mb-3 text-white bg-secondary margin-top-7">
            <div className="row g-0">
                <div className="col-md-4 p-4">
                    <img src={picture} alt="SoyLuisEnrique" width="95%" className="img-fluid rounded" />
                </div>
            
                <div className="col-md-8 padding-5">
                    <div className="card-body text-start">
                        <span className="display-2">HOLA!!!</span>
                        <h1 className="margin-0 text-xl-start">Yo Soy Luis Enrique!</h1>
                        <div className="text-md-start blockquote">
                            <p>Web developer &</p>
                            <p><strong>Máster en Frameworks</strong> para JavaScript</p>
                        </div>
                    </div>
                    <a href={mailtoLink} className="btn btn-secondary btn-lg">Escríbeme!</a>
                </div>
            </div>
        </div>
    );
}

export default Intro;