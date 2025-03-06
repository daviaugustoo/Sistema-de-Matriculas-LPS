import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Modal from 'react-bootstrap/Modal';
import { Container, InputGroup, Row, Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';

function Aluno() {
  const [alunoParaAtualzar, setAlunoParaAtualizar] = useState({
    matricula: '',
    nome: '',
    senha: '',
    disciplinasMatriculadas: [],
  });
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
    alert(`aluno: ${aluno.nome}, senha: ${aluno.senha}, matricula: ${aluno.matricula}`)
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
      <div>
        <h2>Gerenciar Alunos</h2>
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
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Matricula:</InputGroup.Text>
                <Form.Control
                  aria-describedby="basic-addon1"
                  onChange={handleInputChange}
                  name='matricula'
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className='text-end'>
            <Col>
              <Button variant='success' onClick={() => { criarAluno() }}>Salvar</Button>
            </Col>
          </Row>
        </Container>


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
    </div>
  );
}

export default Aluno;
