const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/mensaje', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Email enviado desde la Poke React</h3>
        <ul>
            <li>Email: ${req.body.correoRef}</li>
            <li>Asunto: ${req.body.asunto}</li>
        </ul>
        <h3>Mensaje</h3>
        <p> ${req.body.mensaje}</p>
        `;
    
        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "xeon.planedo@gmail.com",
            pass: "Eddies2014"
        }
    });

    let mailOptions = {
        from: "luisguerrero@misena.edu.co",
        to: req.body.correoRef,
        replyTo: "xeon.planedo@gmail.com",
        subject: req.body.asunto,
        text: req.body.mensaje,
        html: htmoEmail
    };

    transporter.sendMail(mailOptions, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log("Mensaje enviado: %s", info.mensaje);
        console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
    });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto: ${PORT}`);
});