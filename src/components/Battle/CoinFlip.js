import React, { useState } from 'react';
import './CoinFlip.css'; // Estilos específicos para la moneda

const CoinFlip = ({ onResult }) => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [result, setResult] = useState(null); // "user" o "gpt"

    const flipCoin = () => {
        if (isFlipping) return; // Prevenir múltiples lanzamientos simultáneos

        setIsFlipping(true);
        const coinResult = Math.random() > 0.5 ? 'user' : 'gpt';

        setTimeout(() => {
            setResult(coinResult);
            onResult(coinResult); // Informar al componente padre del resultado
            setIsFlipping(false);
        }, 3000); // Duración de la animación (en milisegundos)
    };

    return (
        <div className="coin-flip-container">
            <div
                className={`coin ${isFlipping ? 'flipping' : ''} ${result}`}
                onClick={flipCoin}
            >
                <div className="coin-face front">Empiezas tú</div>
                <div className="coin-face back">Empieza GPT</div>
            </div>
            {!isFlipping && result && (
                <p className="coin-result">
                    Resultado: {result === 'user' ? '¡Empiezas tú!' : '¡Empieza GPT!'}
                </p>
            )}
            {!isFlipping && !result && (
                <button onClick={flipCoin} className="flip-button">Lanzar Moneda</button>
            )}
        </div>
    );
};

export default CoinFlip;
