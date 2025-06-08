import React from 'react';
import './CameraItem.css';
import { useTheme } from '../../contexts/ThemeContext';

const CameraItem = ({ cameraId, streamUrl }) => {
  const { isDarkTheme } = useTheme();
  const horaAtual = new Date().toLocaleTimeString('pt-BR');

  return (
    <div className={`camera-item ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="camera-feed">
        <div className="camera-content">
          <img
            src={streamUrl}
            alt={`Stream da câmera ${cameraId}`}
            className="camera-stream"
          />
          <div className="camera-overlay">
            <div className="camera-info">
              <span className="camera-status">LIVE • {horaAtual}</span>
              <span className="camera-id">CAM{cameraId.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraItem;
