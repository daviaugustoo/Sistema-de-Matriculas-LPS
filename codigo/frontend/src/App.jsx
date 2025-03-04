import React from 'react';
import Aluno from "./components/Aluno.jsx";
import Professor from './components/Professor.jsx';
import Curso from './components/Curso.jsx';
import Disciplina from './components/Disciplina.jsx';
import Secretaria from './components/Secretaria.jsx';
import SistemaMatricula from './components/SistemaMatricula.jsx';

function App() {
  return (
    <div className="App">
      <h1>Gestão Acadêmica</h1>
      <Aluno />
      <Professor />
      <Curso />
      <Disciplina />
      <Secretaria />
      <SistemaMatricula />
    </div>
  );
}

export default App;
