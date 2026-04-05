const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  console.log('Simülatör bağlandı, veri gönderiliyor...');

  setInterval(() => {
    const data = {
      deviceId: 'sensor-001',
      timestamp: new Date().toISOString(),
      temperature: (20 + Math.random() * 15).toFixed(2),
      humidity:    (40 + Math.random() * 40).toFixed(2),
      pressure:    (1000 + Math.random() * 20).toFixed(2)
    };

    ws.send(JSON.stringify(data));
    console.log('Gönderildi:', data);
  }, 2000); // her 2 saniyede bir
});

ws.on('error', (err) => console.error('Hata:', err.message));