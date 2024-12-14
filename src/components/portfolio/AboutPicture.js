import React from 'react';
import picture from '../../assets/images/LuisBiblio.jpg';

const AboutPicture = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-md-6 p-3">
                <img src={picture} alt="Luis en Biblioteca" className="img-fluid rounded" />
            </div>
        </div>
    );
}

export default AboutPicture;