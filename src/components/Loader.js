import React from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

const Loader = () => {
    return (
        <div 
            className="d-flex flex-column align-items-center justify-content-center mt-5" 
            style={{ height: '100vh' }}
        >
            <Row>
                <Col className="d-flex justify-content-center">
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ height: '5vh', width: '5vh' }}
                    >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <div className="mx-3">
                        Buscando Pokemones . . .
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Loader;