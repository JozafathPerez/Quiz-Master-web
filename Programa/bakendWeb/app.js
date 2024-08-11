const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
// para parsear cuerpos de solicitudes JSON
app.use(express.json());

// Importa los routers para las rutas del juego y del historial
const gameRouter = require('./routes/game');
const historyRouter = require('./routes/history');

// Usa el router del juego para las rutas que comienzan con /api/game
app.use('/api/game', gameRouter);
app.use('/api/history', historyRouter);

// Ruta para la raíz (inesesario)
app.get('/', (req, res) => {
  res.send('Bienvenidos al backend de Quiz Master');
});

const PORT = 5000;
// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
