import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Disciplina() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [disciplina, setDisciplina] = useState({
    nome: '',
    codigo: '',
    professor: '',
    alunos: [],
  });

  useEffect(() => {
    api.get('/disciplinas')
      .then(response => {
        setDisciplinas(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar disciplinas:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setDisciplina({ ...disciplina, [e.target.name]: e.target.value });
  };

  const criarDisciplina = () => {
    api.post('/disciplinas', disciplina)
      .then((response) => {
        setDisciplinas([...disciplinas, response.data]);
        setDisciplina({ nome: '', codigo: '', professor: '', alunos: [] });
      })
      .catch((error) => console.error('Erro ao criar disciplina:', error));
  };

  const deletarDisciplina = (id) => {
    api.delete(`/disciplinas/${id}`)
      .then(() => {
        setDisciplinas(disciplinas.filter((disciplina) => disciplina.id !== id));
      })
      .catch((error) => console.error('Erro ao deletar disciplina:', error));
  };

  const adicionarAluno = (aluno) => {
    const updatedDisciplina = { ...disciplina, alunos: [...disciplina.alunos, aluno] };
    setDisciplina(updatedDisciplina);
  };

  const removerAluno = (aluno) => {
    const updatedDisciplina = { 
      ...disciplina, 
      alunos: disciplina.alunos.filter((a) => a !== aluno) 
    };
    setDisciplina(updatedDisciplina);
  };

  return (
    <div>
      <h2>Gerenciar Disciplina</h2>
      <input
        type="text"
        name="nome"
        value={disciplina.nome}
        onChange={handleInputChange}
        placeholder="Nome da disciplina"
      />
      <input
        type="text"
        name="codigo"
        value={disciplina.codigo}
        onChange={handleInputChange}
        placeholder="Código da disciplina"
      />
      <input
        type="text"
        name="professor"
        value={disciplina.professor}
        onChange={handleInputChange}
        placeholder="Professor"
      />
      <button onClick={criarDisciplina}>Criar Disciplina</button>

      <h3>Lista de Disciplinas</h3>
      <ul>
        {disciplinas.map((disciplina) => (
          <li key={disciplina.id}>
            {disciplina.nome} - {disciplina.codigo}
            <button onClick={() => deletarDisciplina(disciplina.id)}>Deletar</button>
            <h4>Alunos</h4>
            <ul>
              {disciplina.alunos.map((aluno, index) => (
                <li key={index}>
                  {aluno}
                  <button onClick={() => removerAluno(aluno)}>Remover</button>
                </li>
              ))}
            </ul>
            <input 
              type="text" 
              placeholder="Adicionar aluno" 
              onBlur={(e) => adicionarAluno(e.target.value)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Disciplina;
