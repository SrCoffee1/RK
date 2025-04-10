import React, { useState, useEffect } from 'react';
import './CameraItem.css';

const CameraItem = ({ cameraId }) => {
  // No mundo real, aqui você teria lógica para conectar
  // com o stream real da câmera usando WebRTC ou similar
  
  const [carregando, setCarregando] = useState(true);
  
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
    <div className="camera-item">
      {carregando ? (
        <div className="camera-carregando">
          <div className="loader"></div>
        </div>
      ) : (
        // Aqui seria um componente de vídeo real conectado ao stream
        // Por enquanto, usamos uma div simulando o feed da câmera
        <div className="camera-preview">
          <div className="camera-feed-simulado">
            {/* Simulação visual de uma câmera de segurança */}
            <div className="camera-conteudo">
              <div className="camera-objeto"></div>
              <div className="camera-tela">
                <div className="camera-paciente"></div>
                <div className="camera-equipamento"></div>
              </div>
            </div>
            <div className="camera-info">
              <span className="camera-timestamp">LIVE • 20:30:45</span>
              <span className="camera-id">CAM{cameraId.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraItem;