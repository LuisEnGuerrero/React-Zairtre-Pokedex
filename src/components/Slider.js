import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {

    render() {

        return (
            <div id="slider" className={this.props.size}>
                <img src={this.props.image}/>
                <h1>{this.props.title}</h1>
                {this.props.btn &&
                    <Link to="/pokedex" className="btn-white">{this.props.btn}</Link>
                }
            </div>

        );
    }
}

export default Slider;
