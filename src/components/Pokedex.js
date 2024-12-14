import React, { Component, Suspense, lazy } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

const PokeBox = lazy(() => import('./PokeBox'));

class Pokedex extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="React's Pokedex"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Lista Completa de Pokemones:</h1>

                        <Suspense fallback={<div>Cargando...</div>}>
                            <PokeBox search={null} />
                        </Suspense>
                    </div>

                    <Sidebar blog="true" />
                </div> {/* FIN DIV CENTER */}
            </div>
        );
    }
}

export default Pokedex;