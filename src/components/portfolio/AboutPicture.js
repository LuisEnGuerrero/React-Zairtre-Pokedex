import React from 'react';
import picture from '../../assets/images/LuisBiblio.jpg';

const AboutPicture = () => {
    return (
        <div>
            <div className="display-flex">
                <div className="col-4 col-md-12 w-50 p-3">
                    <img src={picture} alt="Luis en Biblioteca"></img>
                </div>
            </div>

        </div>
    )
}

export default AboutPicture
