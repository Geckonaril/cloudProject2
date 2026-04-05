# Cloud Project 2 — Gerçek Zamanlı IoT Dashboard

WebSocket üzerinden sensör verisi toplayan, AWS Lambda ile işleyen
ve DynamoDB'ye kaydeden gerçek zamanlı IoT uygulaması.

## Mimari
IoT Simülatör → WebSocket Server → AWS Lambda → DynamoDB
↓
Web Dashboard (canlı grafik)

## Teknolojiler
- Backend: Node.js + WebSocket (ws)
- Bulut: AWS Lambda + DynamoDB
- Frontend: HTML + Chart.js

## Özellikler
- Her 2 saniyede sıcaklık, nem, basınç verisi üretilir
- WebSocket ile gerçek zamanlı iletilir
- Lambda fonksiyonu DynamoDB'ye kaydeder
- Tarayıcıda canlı grafik gösterilir

## Çalıştırma
```bash
cd server
node server.js    # Terminal 1
node simulator.js # Terminal 2
```
Sonra `client/index.html` tarayıcıda aç.

## Video
