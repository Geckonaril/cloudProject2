const WebSocket = require('ws');
const axios = require('axios');
require('dotenv').config();

const wss = new WebSocket.Server({ port: 8080 });
const clients = new Set();

console.log('WebSocket sunucusu 8080 portunda çalışıyor...');

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('Yeni bağlantı. Toplam:', clients.size);

  ws.on('message', async (message) => {
    const data = JSON.parse(message);
    console.log('Veri alındı:', data);

    // Lambda'ya gönder
    try {
      await axios.post(process.env.LAMBDA_URL, data);
    } catch (err) {
      console.error('Lambda hatası:', err.message);
    }

    // Tüm bağlı clientlara ilet (dashboard için)
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Bağlantı kapandı. Toplam:', clients.size);
  });
});