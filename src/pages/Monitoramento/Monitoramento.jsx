import React, { useState, useEffect } from 'react';
import CameraItem from '../../components/CameraItem/CameraItem';
import StatusCamera from '../../components/StatusCamera/StatusCamera';
import './Monitoramento.css';

import { obterStatusCameras } from '../../utils/api';

const Monitoramento = () => {
  const [cameraAtual, setCameraAtual] = useState(1);
  const [statusCameras, setStatusCameras] = useState({
    camera01: 'Carregando...',
    camera02: 'Carregando...',
    camera03: 'Carregando...'
  });

  const [nomesCameras, setNomesCameras] = useState({
    1: 'Câmera 01',
    2: 'Câmera 02',
    3: 'Câmera 03'
  });

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

  const mudarCamera = (direcao) => {
    setCameraAtual(prev =>
      direcao === 'anterior' ? (prev > 1 ? prev - 1 : 3) : (prev < 3 ? prev + 1 : 1)
    );
  };

  const adicionarCamera = () => {
    alert('Funcionalidade para adicionar câmera');
  };

  const renomearCamera = () => {
    const novoNome = prompt('Digite o novo nome da câmera:');
    if (novoNome) {
      setNomesCameras(prev => ({
        ...prev,
        [cameraAtual]: novoNome
      }));
    }
  };

  return (
    <div className="monitoramento-container">
      <div className="camera-principal">
        <div className="camera-header">
          <h2>{nomesCameras[cameraAtual]}</h2>
          <div className="camera-header-direita">
            <button className="botao-editar" onClick={renomearCamera}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="camera-visualizacao">
          <button className="controle-camera anterior" onClick={() => mudarCamera('anterior')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="camera-feed">
            <CameraItem cameraId={cameraAtual} />
          </div>

          <button className="controle-camera proximo" onClick={() => mudarCamera('proximo')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="controles-reprodutor">
          <div className="controles-grupo">
            <button className="botao-controle">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </button>
            <div className="barra-progresso">
              <div className="progresso-atual"></div>
            </div>
          </div>
          <div className="controles-direita">
            <button className="botao-volume">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
            </button>
            <button className="botao-fullscreen">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m10 0h3a2 2 0 0 0 2-2v-3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="cameras-status">
        <div className="status-row">
          <div className={`camera-status-item ${cameraAtual === 1 ? 'atual' : ''}`}>
            <h3>{nomesCameras[1]}</h3>
            <StatusCamera status={statusCameras.camera01} />
          </div>

          <div className={`camera-status-item ${cameraAtual === 2 ? 'atual' : ''}`}>
            <h3>{nomesCameras[2]}</h3>
            <StatusCamera status={statusCameras.camera02} />
          </div>
        </div>

        <div className="status-row">
          <div className={`camera-status-item ${cameraAtual === 3 ? 'atual' : ''}`}>
            <h3>{nomesCameras[3]}</h3>
            <StatusCamera status={statusCameras.camera03} />
          </div>

          <div className="adicionar-camera">
            <span>Adicionar câmera</span>
            <button className="botao-adicionar" onClick={adicionarCamera}>
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
