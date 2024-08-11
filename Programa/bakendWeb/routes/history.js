const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define la ruta al archivo JSON que contiene los resultados
const resultsPath = path.join(__dirname, '../data/results.json');

router.get('/', (req, res) => {
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
  // Envía los resultados como respuesta en formato JSON
  res.json(results);
});

module.exports = router;
