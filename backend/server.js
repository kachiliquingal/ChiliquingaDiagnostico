const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint que obtiene los personajes desde la API pública de Rick and Morty
app.get('/api/personajes', async (req, res) => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        res.json(data.results); // puedes enviar solo los resultados
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
