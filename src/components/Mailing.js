import React, { Component } from 'React';
import axios from 'axios';

class Mailing extends Component {

    email = React.createRef();
    asunto = "Mensaje desde la PokeReact: "+React.createRef();
    mensaje = React.createRef();

    state = {
        email: "",
        asunto: "",
        mensaje: ""
    };

    comprobarCambios = () => {

        var email = this.email.current.value;
        var asunto = this.asunto.current.value;
        var mensaje = this.mensaje.current.value;
        this.setState({
            email: email,
            asunto: asunto,
            mensaje: mensaje
        });
    };

    constructor () {
        super();
        this.enviarEmail = this.enviarEmail.bind(this);
    }

    async enviarEmail (e) {
        e.preventDefault();
        const { email, asunto, mensaje } = this.state;
        const form = await axios.post("/api/mensaje", {
            email,
            asunto,
            mensaje
        });
    }

}

export default Mailing;