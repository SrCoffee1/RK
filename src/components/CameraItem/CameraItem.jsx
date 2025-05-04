import React, { useState, useEffect } from 'react';
import './CameraItem.css';
import { useTheme } from '../../contexts/ThemeContext'; // Importando o contexto de tema

const CameraItem = ({ cameraId }) => {
  // No mundo real, aqui você teria lógica para conectar
  // com o stream real da câmera usando WebRTC ou similar
  
  const [carregando, setCarregando] = useState(true);
  const { isDarkTheme } = useTheme(); // Usando o hook de tema
  
  useEffect(() => {
    // Simula carregamento da câmera
    setCarregando(true);
    const timer = setTimeout(() => {
      setCarregando(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [cameraId]);
  
  // Em uma implementação real, você conectaria com um stream ou API de câmeras
  // Por enquanto, vamos usar uma imagem estática para simular
  
  return (
    <div className={`camera-item ${isDarkTheme ? 'dark' : 'light'}`}>
      {carregando ? (
        <div className="camera-loading">
          <div className="loading-spinner"></div>
          <p>Conectando à câmera...</p>
        </div>
      ) : (
        // Aqui seria um componente de vídeo real conectado ao stream
        // Por enquanto, usamos uma div simulando o feed da câmera
        <div className="camera-feed">
          <div className="camera-content">
            {/* Simulação visual de uma câmera de segurança */}
            <div className="camera-grid">
              <div className="camera-grid-item"></div>
              <div className="camera-grid-item"></div>
              <div className="camera-grid-item"></div>
              <div className="camera-grid-item"></div>
            </div>
            <div className="camera-overlay">
              <div className="camera-info">
                <span className="camera-status">LIVE • 20:30:45</span>
                <span className="camera-id">CAM{cameraId.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraItem;