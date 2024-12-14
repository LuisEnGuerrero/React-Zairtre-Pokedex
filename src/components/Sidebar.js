import React, { Component } from 'react';
import Search from './Search';

class Sidebar extends Component {
    render() {
        return (
            <aside id="slidebar">
                <div id="search" className="slidebar-item">
                    <h3>Buscador de Pokemones</h3>
                    <p>Encuentra el Pokemon que buscas:</p>
                    <Search />
                </div>
            </aside>
        );
    }
}

export default Sidebar;