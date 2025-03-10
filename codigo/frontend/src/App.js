import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aluno from './components/Aluno';
import Professor from './components/Professor';
import Curso from './components/Curso';
import Disciplina from './components/Disciplina';
import Secretaria from './components/Secretaria';
import SistemaMatricula from './components/SistemaMatricula';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToggleButton } from 'react-bootstrap';


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
  
      <ToggleButton
        className="m-2"
        id="toggle-check-1"
        type="checkbox"
        variant="outline-primary"
        checked={aluno}
        value="1"
        onChange={(e) => setAluno(e.currentTarget.checked)}
      >Aluno</ToggleButton>

       <ToggleButton
        className="m-2"
        id="toggle-check-2"
        type="checkbox"
        variant="outline-dark"
        checked={professor}
        value="2"
        onChange={(e) => setProfessor(e.currentTarget.checked)}
      >Professor</ToggleButton>

       <ToggleButton
        className="m-2"
        id="toggle-check-3"
        type="checkbox"
        variant="outline-success"
        checked={curso}
        value="3"
        onChange={(e) => setCurso(e.currentTarget.checked)}
      >Curso</ToggleButton>

       <ToggleButton
        className="m-2"
        id="toggle-check-4"
        type="checkbox"
        variant="outline-warning"
        checked={disciplina}
        value="4"
        onChange={(e) => setDisciplina(e.currentTarget.checked)}
      >Disciplina</ToggleButton>

       {/* <ToggleButton
        className="m-2"
        id="toggle-check-5"
        type="checkbox"
        variant="outline-danger"
        checked={secretaria}
        value="5"
        onChange={(e) => setSecretaria(e.currentTarget.checked)}
      >Secretaria</ToggleButton>

       <ToggleButton
        className="m-2"
        id="toggle-check-6"
        type="checkbox"
        variant="outline-info"
        checked={sistemaMatricula}
        value="6"
        onChange={(e) => setSistemaMatricula(e.currentTarget.checked)}
      >Sistema</ToggleButton> */}
      
      {mostraAluno()}
      {mostraProfessor()}
      {mostraCurso()}
      {mostraDisciplina()}
      {mostraSecretaria()}
      {mostraSistemaMatricula()}
    </div>
  );
}


export default App;
