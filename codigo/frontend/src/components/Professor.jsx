import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Container, InputGroup, Row, Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';

function Professor() {
  const [professores, setProfessores] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
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

    api.get('/disciplinas')
      .then(response => {
        setDisciplinas(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar disciplinas:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setProfessor({ ...professor, [e.target.name]: e.target.value });
  };

  const criarProfessor = () => {
    alert(`nome: ${professor.nome}, senha: ${professor.senha}`)
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

  const adicionarDisciplina = (disciplina) => {
    const updatedProfessor = { ...professor, disciplinasMinistradas: [...professor.disciplinasMinistradas, disciplina] };
    setProfessor(updatedProfessor);
  };

  const removerDisciplina = (disciplina) => {
    const updatedProfessor = {
      ...professor,
      disciplinasMinistradas: professor.disciplinasMinistradas.filter((a) => a !== disciplina)
    };
    setProfessor(updatedProfessor);
  };

  return (
    <div>
      <h2>Gerenciar Professores</h2>
      <Container className='mb-5'>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Nome:</InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                name="nome"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Senha:</InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                name="senha"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='text-end'>
          <Col>
            <Button variant='success' onClick={() => { criarProfessor() }}>Salvar</Button>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>


      <h3>Lista de Professores</h3>
      <ul>
        {professores.map((professor) => (
          <li key={professor.id}>
            {professor.nome}
            <button onClick={() => deletarProfessor(professor.id)}>Deletar</button>
            <h4>Disciplinas</h4>
            <ul>
              {professor.disciplinasMinistradas.map((disciplina, index) => (
                <li key={index}>
                  {disciplina}
                  <button onClick={() => removerDisciplina(disciplina)}>Remover</button>
                </li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Adicionar aluno"
              onBlur={(e) => adicionarDisciplina(e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Professor;
