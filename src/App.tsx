import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Header} from './pages/Header/index'
import {Routes} from './routes/index'

// FC -> Functional Component - componente funcional
// função anônima e uma arrow funcion
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter> {/* SPA - Simple Page Application*/}
        <Header/> {/* Menu da Aplicação */}
        <Routes/> {/* Página de busca por repositórios no github */ }
      </BrowserRouter>  
    </>
  );
}

export default App;
