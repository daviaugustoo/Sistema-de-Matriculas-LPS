import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Secretaria() {
  const [secretaria, setSecretaria] = useState({
    nome: '',
    senha: '',
    disciplinas: [],
  });
  const [disciplinas, setDisciplinas] = useState('');
  const [disciplinasList, setDisciplinasList] = useState([]);

  useEffect(() => {
    api.get('/disciplinas')
      .then(response => {
        setDisciplinasList(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar disciplinas:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setSecretaria({ ...secretaria, [e.target.name]: e.target.value });
  };

  const handleDisciplinasChange = (e) => {
    setDisciplinas(e.target.value);
  };

  const adicionarDisciplina = () => {
    if (disciplinas) {
      setDisciplinasList([...disciplinasList, disciplinas]);
      setDisciplinas('');
    }
  };

  const deletarDisciplina = (disciplina) => {
    setDisciplinasList(disciplinasList.filter((d) => d !== disciplina));
  };

  return (
    <div>
      <h2>Secretaria</h2>
      <input
        type="text"
        name="nome"
        value={secretaria.nome}
        onChange={handleInputChange}
        placeholder="Nome"
      />
      <input
        type="password"
        name="senha"
        value={secretaria.senha}
        onChange={handleInputChange}
        placeholder="Senha"
      />

      <h3>Gerenciar Disciplinas</h3>
      <input
        type="text"
        value={disciplinas}
        onChange={handleDisciplinasChange}
        placeholder="Nome da Disciplina"
      />
      <button onClick={adicionarDisciplina}>Adicionar Disciplina</button>

      <ul>
        {/* {disciplinasList.map((disciplina, index) => (
          <li key={index}>
            {disciplina}
            <button onClick={() => deletarDisciplina(disciplina)}>Deletar</button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default Secretaria;
