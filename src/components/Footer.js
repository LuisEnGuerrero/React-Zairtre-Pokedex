import React from 'react';
import logoFooter from '../assets/images/sol_de_los_pastos.jpg';


const Footer = () => {
    return (
        <footer id="footer">
            <div className="center">
                <nav className="footer-row">
                    <ul className="footer-col footer-list">
                        <hr />
                        <li className="footer-title">&copy; Copyright 2024 <strong>LuisEnGuerrero.Co</strong></li>
                        <li className="footer-text">Esta Web ha sido desarrollada en React-16 en el 2021, actualizada en 2024 a React-19 y diseñada con CSS.</li>
                    </ul>
                    <ul className="footer-col footer-logo">
                        <img src={logoFooter} alt='logo' className='logo-img' height='88' />
                    </ul>
                    <ul className="footer-col footer-list">
                        <hr />
                        <li className="footer-title">Sígueme!</li>
                        <div className="footer-icons">
                            <a className="text-reset" href='https://api.whatsapp.com/send?phone=573208172936' target='_blank' rel="noopener noreferrer"><i className="h3 bi bi-whatsapp"></i></a>
                            <a className="text-reset" href='mailto:luisenguerrero.cm@gmail.com' target='_blank' rel="noopener noreferrer"><i className="h3 bi bi-mailbox2"></i></a>
                            <a className="text-reset" href='https://www.linkedin.com/in/luisenguerrero/' target='_blank' rel="noopener noreferrer"><i className="h3 bi bi-linkedin"></i></a>
                            <a className="text-reset" href='https://github.com/LuisEnGuerrero' target='_blank' rel="noopener noreferrer"><i className="h3 bi bi-github"></i></a>
                            <a className="text-reset" href='https://luisenguerrero.netlify.app/' target='_blank' rel="noopener noreferrer"><i className="h3 bi bi-layout-text-sidebar-reverse"></i></a>
                        </div>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;