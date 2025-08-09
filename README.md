This project implements a real-time location tracking backend using Socket.IO and Node.js. It provides a WebSocket-based infrastructure for real-time communication between clients — ideal for use cases like:

Real-time movement visualization on a map

🔧 Key Features
📡 Real-Time Updates – Uses WebSockets via Socket.IO for instant bi-directional communication.

📍 Live Location Tracking – Clients can emit updated coordinates, which are broadcast to other connected users.

🔒 Efficient & Scalable – Lightweight backend suitable for integration with mapping services (e.g., Google Maps, Mapbox).

🧠 Custom Event Support – Easily customizable events for connecting, updating location, and disconnecting.

⚙️ Tech Stack
Node.js

Socket.IO

Optional: Express.js (if using for HTTP endpoints as well)

📦 How It Works
Client connects to the Socket.IO server.

On location change, the client emits a locationUpdate event with new coordinates.

Server broadcasts this update to all subscribed clients (or specific rooms).

Clients receive the update and update their UI (e.g., moving a marker on a map).

<img width="1909" height="1030" alt="Screenshot 2025-08-09 131904" src="https://github.com/user-attachments/assets/4fd5e5ff-c26a-4c9d-aec5-9eaaf434f5da" />
