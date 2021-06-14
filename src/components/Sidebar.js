import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });

    }

    render() {

        if(this.state.redirect){
            return (
                <Redirect to={'/redirect/'+this.state.search} />
            )
        }

        return (
                <aside id="slidebar">
                    
                    <div id="search" className="slidebar-item">
                        <h3>Buscador por Código</h3>
                        <p>Encuentra el Pokemon que buscas:</p>
                        <form onSubmit={this.redirectToSearch}>
                            <input type="text" name="search" ref={this.searchRef}/>
                            <input type="submit" name="submit" value="Buscar" className="btn btn-success"/>
                        </form>
                    </div>
                </aside>
        );
    }
}

export default Sidebar;