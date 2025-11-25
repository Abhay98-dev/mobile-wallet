📱 Personal Budget Tracker — Frontend (React Native + Expo)

This is the mobile frontend of the Personal Budget Tracker App built using React Native, Expo Router, Neon PostgreSQL, Clerk Authentication, and Upstash Redis.

Users can:

Create an account & log in using Clerk

Add expenses

View total balance

View recent transactions

Track financial activity in real-time

🚀 Features

React Native + Expo Router

Clerk authentication

Secure API calls

Add / view transactions

Neon PostgreSQL as database

Redis caching

Smooth and responsive UI

🧰 Tech Stack

React Native + Expo

Expo Router

Clerk Auth

Neon PostgreSQL

Upstash Redis

Axios

📦 Installation
git clone https://github.com/Abhay98-dev/mobile-wallet.git
cd frontend
npm install

▶️ Running the App
npx expo start


Scan the QR using Expo Go.

🔗 API Endpoints Used
| Action              | Method | Endpoint                 |
| ------------------- | ------ | ------------------------ |
| Get total balance   | GET    | /api/transactions/total  |
| Get recent history  | GET    | /api/transactions/recent |
| Add new transaction | POST   | /api/transactions/add    |
