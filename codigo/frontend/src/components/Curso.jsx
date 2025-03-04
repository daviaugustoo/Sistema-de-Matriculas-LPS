import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Curso() {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState({
    nome: '',
    codigo: '',
    creditos: 0,
    disciplinas: [],
  });

  useEffect(() => {
    api.get('/cursos')
      .then(response => {
        setCursos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar cursos:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const criarCurso = () => {
    api.post('/cursos', curso)
      .then((response) => {
        setCursos([...cursos, response.data]);
        setCurso({ nome: '', codigo: '', creditos: 0, disciplinas: [] });
      })
      .catch((error) => console.error('Erro ao criar curso:', error));
  };

  const deletarCurso = (id) => {
    api.delete(`/cursos/${id}`)
      .then(() => {
        setCursos(cursos.filter((curso) => curso.id !== id));
      })
      .catch((error) => console.error('Erro ao deletar curso:', error));
  };

  return (
    <div>
      <h2>Gerenciar Cursos</h2>
      <input
        type="text"
        name="nome"
        value={curso.nome}
        onChange={handleInputChange}
        placeholder="Nome do curso"
      />
      <input
        type="text"
        name="codigo"
        value={curso.codigo}
        onChange={handleInputChange}
        placeholder="Código do curso"
      />
      <input
        type="number"
        name="creditos"
        value={curso.creditos}
        onChange={handleInputChange}
        placeholder="Créditos"
      />
      <button onClick={criarCurso}>Criar Curso</button>

      <h3>Lista de Cursos</h3>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            {curso.nome} - {curso.codigo}
            <button onClick={() => deletarCurso(curso.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Curso;
