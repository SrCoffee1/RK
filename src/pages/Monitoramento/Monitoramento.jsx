import React, { useState, useEffect } from 'react';
import CameraItem from '../../components/CameraItem/CameraItem';
import StatusCamera from '../../components/StatusCamera/StatusCamera';
import './Monitoramento.css';
import { useTheme } from '../../contexts/ThemeContext'; // Importando o contexto de tema

import { obterStatusCameras } from '../../utils/api';

const Monitoramento = () => {
  const [cameraAtual] = useState(1);
  const [statusCameras, setStatusCameras] = useState({
    camera01: 'Exibindo',
    camera02: 'Carregando...',
    camera03: 'Carregando...'
  });

  const [nomesCameras] = useState({
    1: 'Câmera 01',
    2: 'Câmera 02',
    3: 'Câmera 03'
  });

  // Usando o hook de tema
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const buscarDados = async () => {
      const dados = await obterStatusCameras();
      if (dados) {
        setStatusCameras(dados);
      }
    };

    buscarDados(); // ao montar

    const intervalo = setInterval(buscarDados, 5000); // atualiza a cada 5s
    return () => clearInterval(intervalo);
  }, []);



  const adicionarCamera = () => {
    alert('Funcionalidade para adicionar câmera');
  };



  return (
    <div className={`monitoramento-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className={`camera-principal ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className={`camera-header ${isDarkTheme ? 'dark' : 'light'}`}>
          <h2>{nomesCameras[cameraAtual]}</h2>
          <div className="camera-header-direita">
          </div>
        </div>

        <div className={`camera-visualizacao ${isDarkTheme ? 'dark' : 'light'}`}>


          <div className="camera-feed">
             <CameraItem cameraId={1} streamUrl="http://192.168.1.8:5000/video_feed" />
          </div>

        
        </div>

       
      </div>

      <div className="cameras-status">
        <div className="status-row">
          <div className={`camera-status-item ${cameraAtual === 1 ? 'atual' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
            <h3>{nomesCameras[1]}</h3>
            <StatusCamera status={statusCameras.camera01} />
          </div>

          <div className={`camera-status-item ${cameraAtual === 2 ? 'atual' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
            <h3>{nomesCameras[2]}</h3>
            <StatusCamera status={statusCameras.camera02} />
          </div>
        </div>

        <div className="status-row">
          <div className={`camera-status-item ${cameraAtual === 3 ? 'atual' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
            <h3>{nomesCameras[3]}</h3>
            <StatusCamera status={statusCameras.camera03} />
          </div>

          <div className={`adicionar-camera ${isDarkTheme ? 'dark' : 'light'}`}>
            <span>Adicionar câmera</span>
            <button className={`botao-adicionar ${isDarkTheme ? 'dark' : 'light'}`} onClick={adicionarCamera}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoramento;