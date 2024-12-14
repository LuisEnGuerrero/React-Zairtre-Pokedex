import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

// Importar Rutas creadas.
import Error from './components/Error';
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Portfolio from './components/Portfolio';
import PokemonPage from './components/PokemonPage';
import PokeSearch from './components/PokeSearch'; // Importar PokeSearch

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex />} />
                    <Route path="/pokedex/pokemon/:id" element={<PokemonPage />} />
                    <Route path="/search/:search" element={<PokeSearch />} /> {/* Usar PokeSearch para búsquedas */}
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;