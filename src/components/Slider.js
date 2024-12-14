import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
    render() {
        const { size, image, nameImage, title, btn } = this.props;

        return (
            <div id="slider" className={size}>
                <img src={image} alt={nameImage} />
                <h1>{title}</h1>
                {btn && (
                    <Link to="/pokedex" className="btn-white">{btn}</Link>
                )}
            </div>
        );
    }
}

export default Slider;