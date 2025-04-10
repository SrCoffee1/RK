// src/utils/api.js

const BASE_URL = 'http://localhost:3001'; // ajuste se estiver usando outra porta ou servidor

export async function obterStatusCameras() {
  try {
    const response = await fetch(`${BASE_URL}/dados-monitoramento`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter status das câmeras:', error);
    return null;
  }
}
