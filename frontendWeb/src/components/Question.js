import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/game/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    setSelectedAnswer(answer);
    setIsCorrect(answer === correctAnswer);

    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        localStorage.setItem('score', score);
        navigate('/results');
      }
      setSelectedAnswer(null); 
      setIsCorrect(null); 
    }, 1000); // Espera un segundo antes de pasar a la siguiente pregunta
  };

  if (questions.length === 0) return <div>Cargando preguntas...</div>;

  // Calcula el número de la pregunta actual
  const currentQuestionNumber = currentQuestionIndex + 1;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h3 className="text-2xl font-medium mb-4 text-center">
        Pregunta {currentQuestionNumber} de {questions.length}
      </h3>
      <h2 className="text-6xl font-bold mb-12 mt-6 text-center">
        {questions[currentQuestionIndex].question}
      </h2>
      <div className="flex flex-col w-full max-w-md">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== null} // Deshabilita los botones después de la selección
            className={`p-4 mb-4 text-lg font-semibold rounded-lg transition-colors duration-300 ${
              selectedAnswer === option
                ? isCorrect
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
