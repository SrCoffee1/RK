import React from 'react';
import './StatusCamera.css';

const StatusCamera = ({ status }) => {
  const statusClass = status.toLowerCase() === 'alerta' ? 'status-alerta' : 'status-seguro';
  
  return (
    <div className="status-camera">
      <div className="status-titulo">Status</div>
      <div className={`status-valor ${statusClass}`}>
        {status}
      </div>
    </div>
  );
};

export default StatusCamera;