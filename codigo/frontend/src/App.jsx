import React, { useState } from 'react';
import Aluno from "./components/Aluno.jsx";
import Professor from './components/Professor.jsx';
import Curso from './components/Curso.jsx';
import Disciplina from './components/Disciplina.jsx';
import Secretaria from './components/Secretaria.jsx';
import SistemaMatricula from './components/SistemaMatricula.jsx';

function App() {
  const [aluno, setAluno] = useState(false)
  const [professor, setProfessor] = useState(false)
  const [curso, setCurso] = useState(false)
  const [disciplina, setDisciplina] = useState(false)
  const [secretaria, setSecretaria] = useState(false)
  const [sistemaMatricula, setSistemaMatricula] = useState(false)


  function mostraAluno() {
    if (aluno == true) {
      return (<Aluno />)
    } else {
      return
    }
  }

  function mostraProfessor() {
    if (professor == true) {
      return (<Professor />)
    }
  }

  function mostraCurso() {
    if (curso == true) {
      return (<Curso />)
    }
  }

  function mostraDisciplina() {
    if (disciplina == true) {
      return (<Disciplina />)
    }
  }

  function mostraSecretaria() {
    if (secretaria == true) {
      return (<Secretaria />)
    }
  }

  function mostraSistemaMatricula() {
    if (sistemaMatricula == true) {
      return (<SistemaMatricula />)
    }
  }

  return (
    <div className="App">
      <h1>Gestão Acadêmica</h1>
      {mostraAluno()}
      {mostraProfessor}
      {mostraCurso()}
      {mostraDisciplina()}
      {mostraSecretaria()}
      {mostraSistemaMatricula()}
    </div>
  );
}

export default App;
