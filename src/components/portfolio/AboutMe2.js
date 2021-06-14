import React from 'react'
import picture from '../../assets/images/LuisBiblio.jpg';
import Skills from './Skills';

const AboutMe2 = () => {
    return (
        <div className="card mb-3 text-dark bg-light mb-3 margin-top-7">
            <div className="row g-0">
                <div className="col-md-7 paddingTLR-52">
                    <div className="card-body">
                        <h2 className="card-title fw-bolder">Luis Enrique Guerrero Ibarra</h2>
                        <h4 className="space-top">Soy un Apasionado <span className="text-primary">Desarrollador Web</span></h4>
                        <div className="subheader"></div>
                        <p className="text-secondary card-text lh-base text-start">
                            Desde el primer momento en que llegó el servicio de Internet a Pasto, Nariño, mi Ciudad en Colombia, no dudé ni un segundo en hacer hasta lo imposible por comprarme un Modem dsl a máxima velocidad: 14.400bytes por segundo! Descubrí desde ese mismo instante todo el potencial que traería en adelante el desarrollo Web.
                        </p>
                        <p className="text-secondary card-text lh-base text-start">
                            Me sorprendió el poder de Napster! del que me volví asiduo fanático. Con el paso del Tiempo, YouTube que hasta ahora no ha perdido su lugar, aunque lo ha compartido con otros proveedores de contenido. Y la Magia del Marketing Digital que es un terreno aún por explorar en muchos sentidos. Es por esto que me he dedicado al estudio y aplicación de las poderosas herramientas de diseño y administración de páginas Web que ofrece JavaScript con soporte de otras tecnologías para alcanzar el máximo desempeño. Este Sitio es una pequeña muestra de mi trabajo. Espero que lo disfrutes.
                        </p>
                        <button className="btn btn-primary space-top">Currículo!</button>
                        <div className="subheader"></div>
                    </div>
                </div>

                <div className="col-md-4 img-fluid padding-5">
                    <img src={picture} alt="Luis en Biblioteca" height="38.5%" width="auto"></img>
                </div>
                <Skills />
            </div>
        </div>
    )
}

export default AboutMe2
