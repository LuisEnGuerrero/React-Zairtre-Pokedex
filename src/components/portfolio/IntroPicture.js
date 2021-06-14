import React from 'react';
import picture from '../../assets/images/SoyLuisEnrique.jpg';

const IntroPicture = () => {
    return (
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} alt="SoyLuisEnrique" width="90%" height="auto"></img>
                </div>
            </div>
    );
}

export default IntroPicture
