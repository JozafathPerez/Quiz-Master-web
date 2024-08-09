import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartGame from './components/StartGame';
import Question from './components/Question';
import Results from './components/Results';
import History from './components/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/question" element={<Question />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
