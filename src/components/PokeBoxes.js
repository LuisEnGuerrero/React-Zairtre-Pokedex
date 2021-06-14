import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Sidebar from './Sidebar';


class PokeBox extends Component {

    state = {
        pokemon: {},
        status: null
    }

    render() {

        return (
            <div id="pokebox">

                <Slider
                    title="PokeBox"
                    size="slider-small"
                />

                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Pokedex:</h1>
                        {/* LISTADO de Articulos que vienen del API REST de Node.js */}


                    </div>

                        


                    <Sidebar
                        blog="true"
                    />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default PokeBox;