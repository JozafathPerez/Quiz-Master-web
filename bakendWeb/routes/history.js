const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '../data/results.json');

router.get('/', (req, res) => {
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));
  res.json(results);
});

module.exports = router;
