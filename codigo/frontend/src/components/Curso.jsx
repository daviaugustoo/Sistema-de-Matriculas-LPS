import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Container, InputGroup, Row, Button } from 'react-bootstrap';
import { Form, Col } from 'react-bootstrap';

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
    alert(`nome: ${curso.nome}, codigo: ${curso.codigo}, creditos: ${curso.creditos}`)

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
              <InputGroup.Text id="basic-addon1">Codigo:</InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                name="codigo"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Creditos:</InputGroup.Text>
              <Form.Control
                aria-describedby="basic-addon1"
                onChange={handleInputChange}
                name='creditos'
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='text-end'>
          <Col>
            <Button variant='success' onClick={() => { criarCurso() }}>Salvar</Button>
          </Col>
        </Row>
      </Container>

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
