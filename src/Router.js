import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';



//Importar Rutas creadas.
import Error from './components/Error';
import Pokedex from './components/Pokedex';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Portfolio from './components/Portfolio';
import Search from './components/Search';
import PokemonPage from './components/PokemonPage';



class Router extends Component {


    render() {

        return (
            <BrowserRouter>
                <Header />

                {/* CONFIGURAR RUTAS Y PAGINAS */}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/pokedex" component={Pokedex} />
                    <Route exact path="/pokedex/pokemon/:id" component={PokemonPage}/>
                    <Route exact path="/pokedex/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={(props) =>{
                            var search = props.match.params.search;
                            return (
                                <Redirect to={'/pokedex/pokemon/'+search} />
                            );
                        }
                    }/>
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route component={Error} />


                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;