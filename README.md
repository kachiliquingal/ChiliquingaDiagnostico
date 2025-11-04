# ⚡ Chiliquinga Diagnóstico App

A **desktop diagnostic test application** built with **ElectronJS** and a **Node.js (Express)** backend.  
This project is designed as a **web programming diagnostic test**, allowing the frontend to interact with a backend API that retrieves character data from the public **Rick and Morty API**.

---

## 🧠 Features

- ⚙️ **ElectronJS integration** for desktop app experience  
- 🌐 **Express server** for backend API requests  
- 🔗 **Rick and Morty API** data fetching  
- 🪄 Simple and clean user interface  
- 📦 Cross-platform ready (Windows/Linux/Mac)

---

## 🚀 How to Run the Project

> **Note:** You need **Node.js (v18 or higher)** installed before continuing.

### 1️⃣ Clone the repository

#### git clone https://github.com/kachiliquingal/ChiliquingaDiagnostico.git
cd ChiliquingaDiagnostico

### 2️⃣ Install dependencies

This project uses a single package.json at the root, so just run:  
#### npm install

### 3️⃣ Run the backend server

Start the Express API (this must stay running): 
#### npm run backend

You’ll see a message like:  Servidor corriendo en http://localhost:3000

### 4️⃣ Start the Electron desktop app

Open a new terminal (don’t stop the backend) and run: 
#### npm start

### 🖥️ Packaging for Windows

To create an executable version of the app (Windows .exe): 
#### npx electron-packager . DiagnosticoApp --platform=win32 --arch=x64 --overwrite

The generated executable will appear inside a new folder named something like: DiagnosticoApp-win32-x64/



### 🧑‍💻 Author

Alejandro Chiliquinga

GitHub: kachiliquingal
