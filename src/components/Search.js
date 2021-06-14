import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import PokeBox from './PokeBox';

class Search extends Component {


    render(){
        var searched = this.props.match.params.search;

        return (
            <div id="Search">
                
                <Slider
                    title={'Búsqueda de Pokemones con: '+ searched}
                    size="slider-small"
                />

                <div className="center">

                    <div id="content">
                        {/* LISTADO de Articulos que vienen del API REST de Node.js */}
                        <PokeBox
                            search={searched}
                        />
                    </div>

                    <Sidebar 
                        blog="true"
                    />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default Search;