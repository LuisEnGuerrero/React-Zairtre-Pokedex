import React from 'react';
import picture from '../../assets/images/LuisBiblio.jpg';
import cv from '../../assets/Documentos/CV131224.pdf';

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;
        link.setAttribute('download', 'CV - Luis Enrique Guerrero 120624.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    return (
        <div className="card mb-3 text-white bg-secondary margin-top-7 mb-7 pb-5">
            <div className="row g-0">
                <div className="col-md-8 padding-5">
                    <div className="card-body text-start">
                        <h2 className="card-title fw-bolder">Luis Enrique Guerrero Ibarra</h2>
                        <h4 className="space-top">Apasionado <span className="fw-bolder">Desarrollador Web</span></h4>
                        <div className="subheader"></div>
                        <p className="text-white card-text lh-base text-start pt-3">
                            Desde el primer momento en que llegó el servicio de Internet a Pasto, Nariño, su ciudad en Colombia, Luis Enrique no dudó ni un segundo en hacer hasta lo imposible por comprar un módem DSL a máxima velocidad: 14.400 bytes por segundo. Descubrió desde ese mismo instante todo el potencial que traería en adelante el desarrollo web.
                        </p>
                        <p className="text-white card-text lh-base text-start">
                            Se sorprendió con el poder de Napster, del que se volvió asiduo fanático. Con el paso del tiempo, YouTube no ha perdido su lugar, aunque lo ha compartido con otros proveedores de contenido. La magia del marketing digital es un terreno aún por explorar en muchos sentidos. Es por esto que Luis Enrique se ha dedicado al estudio y aplicación de las poderosas herramientas de diseño y administración de páginas web que ofrece JavaScript con soporte de otras tecnologías para alcanzar el máximo desempeño. Este sitio es una pequeña muestra de su trabajo. Espera que lo disfrutes.
                        </p>
                        <button onClick={handleDownload} className="btn btn-primary space-top">Currículo!</button>
                        <div className="subheader"></div>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <img src={picture} alt="Luis Enrique Guerrero Ibarra" width="95%" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;