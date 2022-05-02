import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// criamos um objeto que representa a div root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// o conteúdo gerado pelo componente App será
// inserido na div root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

