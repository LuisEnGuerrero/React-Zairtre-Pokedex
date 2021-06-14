import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import PokeBox from './PokeBox';

class Pokedex extends Component {

    render(){

        return (
            <div id="blog">
                
                <Slider
                    title="React's Pokedex"
                    size="slider-small"
                />

                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Lista Completa de Pokemones:</h1>
                        {/* LISTADO de Articulos que vienen del API REST de Node.js */}
                        <PokeBox/>
                    </div>

                    <Sidebar 
                        blog="true"
                    />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default Pokedex;