const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const perros = [
    {
        id: 1,
        nombre: 'Pug',
        descripcion: 'Los pugs son perros pequeños y robustos con una esperanza de vida de 12 a 15 años, conocidos por su carácter cariñoso y juguetón, y su apariencia distintiva de cara arrugada y hocico chato.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zTg-kHqdfmhoZNE_5M7OsefWfvToYuHeVQ&s'
    },
    {
        id: 2,
        nombre: 'Bulldog Inglés',
        descripcion: 'El Bulldog Inglés es un perro mediano, robusto y tranquilo, con una esperanza de vida de 8 a 10 años. Son leales, afectuosos y buenos con los niños.',
        imagen: 'https://www.superpet.ec/wp-content/uploads/2020/05/bulldog-1.webp'
    }
];

const usuarios = [
    { id: 1, nombre: 'Maria Anders', descripcion: 'President' },
    { id: 2, nombre: 'Francisco Chang', descripcion: 'Vice President' },
    { id: 3, nombre: 'Kuc Puh', descripcion: 'Salesman' }
];

app.get('/api/perros', (req, res) => {
    res.json(perros);
});

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
