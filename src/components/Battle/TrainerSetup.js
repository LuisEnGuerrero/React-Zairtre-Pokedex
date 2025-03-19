import React, { useState } from 'react';
import './TrainerSetup.css'; // Archivo CSS para estilos específicos del componente
import logo from '../../assets/images/gear.png';


const TrainerSetup = ({ onSetupComplete }) => {
    const [trainerName, setTrainerName] = useState('');
    const [teamName, setTeamName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!trainerName.trim() || !teamName.trim()) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        onSetupComplete({ trainerName: trainerName.trim(), teamName: teamName.trim() });
    };

    return (
        <div className="trainer-setup">
            <img src={logo} alt="Logo Pokémon" />

            <h2>Configura tu Entrenador y Equipo</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="trainerName">Nombre del Entrenador:</label>
                    <input
                        type="text"
                        id="trainerName"
                        value={trainerName}
                        onChange={(e) => setTrainerName(e.target.value)}
                        placeholder="Escribe tu nombre..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teamName">Nombre del Equipo:</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="Escribe el nombre de tu equipo..."
                    />
                </div>
                <button type="submit" className="setup-button">
                    Confirmar
                </button>
            </form>
        </div>
    );
};

export default TrainerSetup;
