import React, { useState } from 'react';
import './MoveSelection.css'; // Asegúrate de agregar estilos específicos

const MoveSelection = ({ moves, onSelectMove }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="move-selection-container">
            <button className="open-modal-button" onClick={toggleModal}>
                Seleccionar Movimiento
            </button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Selecciona un movimiento</h3>
                        
                        {moves && moves.length > 0 ? (
                            <ul className="move-list">
                                {moves.map((move, index) => (
                                    <li key={index} className="move-item">
                                        <button
                                            onClick={() => {
                                                onSelectMove(move);
                                                toggleModal();
                                            }}
                                        >
                                            {move.name || "Movimiento desconocido"}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-moves-message">No hay movimientos disponibles</p>
                        )}

                        <button className="close-modal-button" onClick={toggleModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoveSelection;
