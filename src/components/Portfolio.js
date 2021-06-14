import React, { Component } from 'react';
import Slider from './Slider';
import Intro from './portfolio/Intro';
import AboutMe from './portfolio/AboutMe';
import Skills from './portfolio/Skills';


class Portfolio extends Component {

    state = {
        user: {}
    };

    render() {

        if (this.state.user.nombre) {
            var user = this.state.user;
        }

        return (
            <div id="portfolio">

                <Slider
                    title="Mi Portafolio:"
                    size="slider-small"
                />

                <div className="center">
                    
                        <Intro/> 

                        <AboutMe/>

                        <Skills/>

                </div> {/* FIN DIV CENTER */}

                <div className="clearfix"></div>

            </div>
        );
    }
}

export default Portfolio;