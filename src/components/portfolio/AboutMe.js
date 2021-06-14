import React from 'react';
import picture from '../../assets/images/LuisBiblio.jpg';
import Download from '../Download';

const AboutMe = () => {
    

    return (
        <div className="card mb-3 card text-white bg-secondary mb-3 margin-top-7 mb-7 pb-5">
            <div className="row g-0">

                <div className="col-md-8 padding-5">
                    <div className="card-body text-start">
                        <h2 className="card-title fw-bolder">Luis Enrique Guerrero Ibarra</h2>
                        <h4 className="space-top">Soy un Apasionado <span className="text-primary">Desarrollador Web</span></h4>
                        <div className="subheader"></div>
                        <p className="text-white text-secondary card-text lh-base text-start pt-3">
                            Desde el primer momento en que llegó el servicio de Internet a Pasto, Nariño, mi Ciudad en Colombia, no dudé ni un segundo en hacer hasta lo imposible por comprarme un Modem dsl a máxima velocidad: 14.400bytes por segundo! Descubrí desde ese mismo instante todo el potencial que traería en adelante el desarrollo Web.
                        </p>
                        <p className="text-white text-secondary card-text lh-base text-start">
                            Me sorprendió el poder de Napster! del que me volví asiduo fanático. Con el paso del Tiempo, YouTube que hasta ahora no ha perdido su lugar, aunque lo ha compartido con otros proveedores de contenido. Y la Magia del Marketing Digital que es un terreno aún por explorar en muchos sentidos. Es por esto que me he dedicado al estudio y aplicación de las poderosas herramientas de diseño y administración de páginas Web que ofrece JavaScript con soporte de otras tecnologías para alcanzar el máximo desempeño. Este Sitio es una pequeña muestra de mi trabajo. Espero que lo disfrutes.
                        </p>
                        <button onClick={<Download />} className="btn btn-primary space-top" download="Hoja de Vida Chachagui Colombia - Luis Enrique Guerrero 120621.pdf">Currículo!</button>
                        <div className="subheader"></div>
                    </div>
                </div>

                <div className="col-md-4 pt-5">
                    <img src={picture} alt="SoyLuisEnrique" width="95%"></img>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
