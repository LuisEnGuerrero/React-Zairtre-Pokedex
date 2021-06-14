import React, { Component } from 'react';
import logo from '../assets/images/gear.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/* LOGO */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Poke</strong>React
                    </span>
                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">PokeHome</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pokedex" activeClassName="active">Pokedex</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeClassName="active">Comentarios</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" activeClassName="active">Sobre mí</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* LIMPIAR FLOTADOS */}
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }
}

export default Header;