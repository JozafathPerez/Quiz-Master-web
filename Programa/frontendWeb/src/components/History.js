import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  // useEffect para obtener el historial de resultados al montar el componente
  useEffect(() => {
    fetch('http://localhost:5000/api/history') // Realiza una solicitud GET a la API para obtener el historial
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      {/* Botón para volver a la pantalla de inicio */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Volver
      </button>

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Historial de Resultados</h1>
      {history.length === 0 ? (
        <p className="text-center text-lg text-gray-700">No hay resultados disponibles.</p>
      ) : (
        <ul className="space-y-4 max-w-xl mx-auto">
          {history.map((item, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-900">{item.playerName}</span>
              <span
                className={`text-xl font-semibold ${
                  item.score >= 6 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.score}/10
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
