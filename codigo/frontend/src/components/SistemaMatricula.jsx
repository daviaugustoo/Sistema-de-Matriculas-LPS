import React, { useState } from 'react';
import api from '../services/api';

function SistemaMatricula() {
  const [matriculaInfo, setMatriculaInfo] = useState({
    aluno: '',
    disciplina: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatriculaInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const registrarMatricula = () => {
    // Lógica para registrar a matrícula
    console.log('Matrícula registrada para aluno:', matriculaInfo.aluno);
    console.log('Disciplina:', matriculaInfo.disciplina);
  };

  const cancelarMatricula = () => {
    // Lógica para cancelar a matrícula
    console.log('Matrícula cancelada para aluno:', matriculaInfo.aluno);
    setMatriculaInfo({ aluno: '', disciplina: '' });
  };

  return (
    <div>
      <h2>Sistema de Matrícula</h2>
      <input
        type="text"
        name="aluno"
        value={matriculaInfo.aluno}
        onChange={handleInputChange}
        placeholder="Matrícula do aluno"
      />
      <input
        type="text"
        name="disciplina"
        value={matriculaInfo.disciplina}
        onChange={handleInputChange}
        placeholder="Código da disciplina"
      />
      <button onClick={registrarMatricula}>Registrar Matrícula</button>
      <button onClick={cancelarMatricula}>Cancelar Matrícula</button>
    </div>
  );
}

export default SistemaMatricula;
