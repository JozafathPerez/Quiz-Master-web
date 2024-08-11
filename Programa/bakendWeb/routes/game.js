const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define las rutas a los archivos JSON que contienen las preguntas y los resultados
const questionsPath = path.join(__dirname, '../data/questions.json');
const resultsPath = path.join(__dirname, '../data/results.json');

router.get('/questions', (req, res) => {
  // Lee las preguntas del archivo JSON y selecciona 10 preguntas aleatorias
  const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
  // Selecciona 10 preguntas aleatorias
  const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  // Envia las preguntas seleccionadas
  res.json(selectedQuestions);
});

router.post('/results', (req, res) => {
  // Lee los resultados del archivo JSON y agrega el resultado
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
  results.push(req.body);
  // Escribe los resultados en el archivo JSON
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  // Envía una respuesta con el estado 201 (creado)
  res.status(201).send();
});

module.exports = router;
