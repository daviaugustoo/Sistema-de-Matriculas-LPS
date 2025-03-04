import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Professor() {
  const [professores, setProfessores] = useState([]);
  const [professor, setProfessor] = useState({
    nome: '',
    senha: '',
    disciplinasMinistradas: [],
  });

  useEffect(() => {
    api.get('/professores')
      .then(response => {
        setProfessores(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar professores:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setProfessor({ ...professor, [e.target.name]: e.target.value });
  };

  const criarProfessor = () => {
    api.post('/professores', professor)
      .then((response) => {
        setProfessores([...professores, response.data]);
        setProfessor({ nome: '', senha: '', disciplinasMinistradas: [] });
      })
      .catch((error) => console.error('Erro ao criar professor:', error));
  };

  const deletarProfessor = (id) => {
    api.delete(`/professores/${id}`)
      .then(() => {
        setProfessores(professores.filter((professor) => professor.id !== id));
      })
      .catch((error) => console.error('Erro ao deletar professor:', error));
  };

  return (
    <div>
      <h2>Gerenciar Professores</h2>
      <input
        type="text"
        name="nome"
        value={professor.nome}
        onChange={handleInputChange}
        placeholder="Nome"
      />
      <input
        type="password"
        name="senha"
        value={professor.senha}
        onChange={handleInputChange}
        placeholder="Senha"
      />
      <button onClick={criarProfessor}>Criar Professor</button>

      <h3>Lista de Professores</h3>
      <ul>
        {professores.map((professor) => (
          <li key={professor.id}>
            {professor.nome}
            <button onClick={() => deletarProfessor(professor.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Professor;
