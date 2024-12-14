import React, { useState } from 'react';
import axios from 'axios';

const Download = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const downloadImage = async () => {
    setLoading(true);
    setError(null);
    const url = 'https://drive.google.com/uc?export=download&id=1tLM6wyOZT0fFmAxlEYdbAcjnsuVkuMyo';
    try {
      const response = await axios({
        url,
        method: 'GET',
        responseType: 'blob'
      });

      const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = urlBlob;
      link.setAttribute('download', 'Hoja de Vida Chachagui Colombia - Luis Enrique Guerrero 120621.jpg');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('Error al descargar la imagen. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={downloadImage} disabled={loading}>
        {loading ? 'Descargando...' : 'Download'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Download;