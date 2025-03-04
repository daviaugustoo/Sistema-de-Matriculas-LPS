import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Aluno() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({
    matricula: '',
    nome: '',
    senha: '',
    disciplinasMatriculadas: [],
  });

  useEffect(() => {
    api.get('/alunos')
      .then(response => {
        setAlunos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar alunos:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  const criarAluno = () => {
    api.post('/alunos', aluno)
      .then((response) => {
        setAlunos([...alunos, response.data]);
        setAluno({ matricula: '', nome: '', senha: '', disciplinasMatriculadas: [] });
      })
      .catch((error) => console.error('Erro ao criar aluno:', error));
  };

  const deletarAluno = (id) => {
    api.delete(`/alunos/${id}`)
      .then(() => {
        setAlunos(alunos.filter((aluno) => aluno.id !== id));
      })
      .catch((error) => console.error('Erro ao deletar aluno:', error));
  };

  return (
    <div>
      <h2>Gerenciar Alunos</h2>
      <input
        type="text"
        name="matricula"
        value={aluno.matricula}
        onChange={handleInputChange}
        placeholder="Matrícula"
      />
      <input
        type="text"
        name="nome"
        value={aluno.nome}
        onChange={handleInputChange}
        placeholder="Nome"
      />
      <input
        type="password"
        name="senha"
        value={aluno.senha}
        onChange={handleInputChange}
        placeholder="Senha"
      />
      <button onClick={criarAluno}>Criar Aluno</button>

      <h3>Lista de Alunos</h3>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.matricula}
            <button onClick={() => deletarAluno(aluno.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Aluno;
