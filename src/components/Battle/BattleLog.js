import React, { useEffect, useRef } from 'react';
import './BattleLog.css'; // Asegúrate de tener los estilos creados

const BattleLog = ({ log }) => {
  const logEndRef = useRef(null);

  // Desplazar automáticamente al final del log cuando se agregue un nuevo evento
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [log]);

  return (
    <div className="battle-log">
      <h3>Registro de Batalla</h3>
      <ul className="log-list">
        {log.map((entry, index) => (
          <li key={index} className="log-entry">
            {entry}
          </li>
        ))}
        <div ref={logEndRef}></div>
      </ul>
    </div>
  );
};

export default BattleLog;
