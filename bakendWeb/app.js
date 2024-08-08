const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const gameRouter = require('./routes/game');
const historyRouter = require('./routes/history');

app.use('/api/game', gameRouter);
app.use('/api/history', historyRouter);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenidos al backend de Quiz Master');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
