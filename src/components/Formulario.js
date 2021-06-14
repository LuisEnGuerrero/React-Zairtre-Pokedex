import React, { Component } from 'react';
/*import axios from 'axios';*/
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    correoRef = React.createRef();
    mensajeRef = React.createRef();
    hombreRef = React.createRef();
    mujerRef = React.createRef();
    otroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';
        if(this.hombreRef.current.checked){
            genero = this.hombreRef.current.value;
        }else if(this.mujerRef.current.checked){
            genero = this.mujerRef.current.value;
        }else{
            genero = this.otroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            correo: this.correoRef.current.value,
            mensaje: this.mensajeRef.current.value,
            genero: genero
        }
        
        this.setState ({
            user: user
        });
    }

/*    comprobarCambios = () => {

        var email = this.correoRef.current.value;
        var asunto = this.nombreRef.current.value;
        var mensaje = this.mensajeRef.current.value;
        this.setState({
            email: email,
            asunto: asunto,
            mensaje: mensaje
        });
    };


        const enviarEmail = async (e) => {
            e.preventDefault();
            const { email, asunto, mensaje } = this.state;
            const form = await axios.post("/api/mensaje", {
                email,
                asunto,
                mensaje
            });


    constructor() {
        super();
        this.enviarEmail = this.enviarEmail.bind(this);
    }
        }*/


    render() {
    
        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (
            <div id="formulario">

                <Slider
                    title="Escríbeme:"
                    size="slider-small"
                /> 

                <div className="center">

                    <div id="content" className="clearfix">
                        {/* MOSTRAR DATOS DEL FORMULARIO */}
                        {this.state.user.nombre && 
                        <div id="user-data">
                            <p>Nombre: <strong>{user.nombre}</strong></p>
                            <p>Correo: <strong>{user.correo}</strong></p>
                            <p>Mensaje: <strong>{user.mensaje}</strong></p>
                            <p>Genero: <strong>{user.genero}</strong></p>
                        </div>
                        }


                        {/* CREACION DEL FORMULARIO */}
                        <form className="mid-form" onSubmit={this.recibirFormulario && this.enviarEmail} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Completo:</label>
                                <input type="text" name="nombre" className="form-control" ref={this.nombreRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo Electrónico:</label>
                                <input 
                                    type="email" 
                                    name="correo" 
                                    onChange={this.comprobarCambios}
                                    className="form-control"
                                    ref={this.correoRef}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Escríbeme tu mensaje:</label>
                                <textarea 
                                    name="mensaje"
                                    onChange={this.comprobarCambios}
                                    className="form-control"
                                    ref={this.mensajeRef}
                                ></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.hombreRef}/>Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.mujerRef}/>Mujer
                                <input type="radio" name="genero" value="otro" ref={this.otroRef}/>Otro
                            </div>

                            <div className="clearfix"></div>

                            <input /*onClick={enviarEmail()*/ type="submit" value="Enviar" className="btn btn-success" />
                        </form>

                    </div>

                    <Sidebar
                        blog="false"
                    />

                </div> {/* FIN DIV CENTER */}


            </div>
        );
    }
}

export default Formulario;