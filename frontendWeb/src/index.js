import React from 'react';
import { createRoot } from 'react-dom/client';  
import App from './App';
import './styles/main.css'; 


// Obtén el elemento root en el DOM
const rootElement = document.getElementById('root');

// Usa createRoot para inicializar la aplicación
const root = createRoot(rootElement);
root.render(<App />);
