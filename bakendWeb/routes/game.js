const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '../data/questions.json');
const resultsPath = path.join(__dirname, '../data/results.json');

router.get('/questions', (req, res) => {
  const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf-8'));
  const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  res.json(selectedQuestions);
});

router.post('/results', (req, res) => {
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
  results.push(req.body);
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  res.status(201).send();
});

module.exports = router;
