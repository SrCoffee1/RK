// Simulação de dados para demonstração
const statusAleatorios = ['Seguro', 'Alerta'];

export const obterStatusCameras = () => {
  // Função auxiliar para sortear status aleatório
  const sortearStatus = () => statusAleatorios[Math.floor(Math.random() * statusAleatorios.length)];

  // Simulação de retorno de status das câmeras
  return {
    camera01: sortearStatus(), // Status aleatório
    camera02: sortearStatus(), // Status aleatório
    camera03: 'Alerta',        // Sempre em alerta
  };
};

export const conectarCamera = (cameraId) => {
  // Em uma implementação real, isso iniciaria a conexão
  // com o stream da câmera especificada
  console.log(`Conectando à câmera ${cameraId}...`);

  // Simulação de resposta após conexão
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'conectado',
        streamUrl: `/streams/camera${cameraId}.mp4`
      });
    }, 1000);
  });
};

export const verificarAlertas = () => {
  // Em uma implementação real, isso verificaria se há novos alertas
  // nas câmeras ou sensores

  // Simulação de resposta
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temAlertas: true,
        qtdAlertas: 1,
        alertas: [
          {
            id: 1,
            camera: 3,
            tipo: 'movimento',
            horario: '20:25:30',
            nivelGravidade: 'médio'
          }
        ]
      });
    }, 500);
  });
};
