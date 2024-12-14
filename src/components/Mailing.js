import React, { Component } from 'react';
import axios from 'axios';

class Mailing extends Component {
    emailRef = React.createRef();
    asuntoRef = React.createRef();
    mensajeRef = React.createRef();

    state = {
        email: "",
        asunto: "",
        mensaje: ""
    };

    comprobarCambios = () => {
        const email = this.emailRef.current.value;
        const asunto = this.asuntoRef.current.value;
        const mensaje = this.mensajeRef.current.value;
        this.setState({
            email: email,
            asunto: asunto,
            mensaje: mensaje
        });
    };

    constructor() {
        super();
        this.enviarEmail = this.enviarEmail.bind(this);
    }

    async enviarEmail(e) {
        e.preventDefault();
        const { email, asunto, mensaje } = this.state;
        try {
            await axios.post("/api/mensaje", {
                email,
                asunto,
                mensaje
            });
            alert('Email enviado con éxito');
        } catch (error) {
            alert('Error al enviar el email. Inténtalo de nuevo más tarde.');
        }
    }

    render() {
        return (
            <div id="mailing">
                <form className="mid-form" onSubmit={this.enviarEmail} onChange={this.comprobarCambios}>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" name="email" className="form-control" ref={this.emailRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="asunto">Asunto:</label>
                        <input type="text" name="asunto" className="form-control" ref={this.asuntoRef} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea name="mensaje" className="form-control" ref={this.mensajeRef}></textarea>
                    </div>
                    <input type="submit" value="Enviar" className="btn btn-success" />
                </form>
            </div>
        );
    }
}

export default Mailing;