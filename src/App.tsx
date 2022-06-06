import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Header} from './pages/Header/index'
import {Rotas} from './routes/index'
import {GlobalStyle} from './styles/global'
// FC -> Functional Component - componente funcional
// função anônima e uma arrow funcion
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter> 
        <Header/> 
        <Rotas/> 
      </BrowserRouter> 
      <GlobalStyle/> 
    </>
  );
}

export default App;
