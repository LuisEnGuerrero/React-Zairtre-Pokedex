const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/mensaje', (req, res) => {
    const { correoRef, asunto, mensaje } = req.body;

    const htmlEmail = `
        <h3>Email enviado desde la Poke React</h3>
        <ul>
            <li>Email: ${correoRef}</li>
            <li>Asunto: ${asunto}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${mensaje}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "xeon.planedo@gmail.com",
            pass: "Eddies2014"
        }
    });

    let mailOptions = {
        from: "luisguerrero@misena.edu.co",
        to: correoRef,
        replyTo: "xeon.planedo@gmail.com",
        subject: asunto,
        text: mensaje,
        html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error al enviar el correo:', err);
            return res.status(500).send('Error al enviar el correo');
        }
        console.log("Mensaje enviado: %s", info.messageId);
        console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
        res.status(200).send('Correo enviado con éxito');
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto: ${PORT}`);
});