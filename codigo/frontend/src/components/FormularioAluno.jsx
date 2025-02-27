import React, { useState } from "react";
import api from "../services/api";
import { Form, Button, Container } from "react-bootstrap";

function FormularioAluno() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/alunos", { nome, email });
      setMensagem("Aluno criado com sucesso!");
      setNome("");
      setEmail("");
    } catch (error) {
      setMensagem("Erro ao criar aluno. Tente novamente.");
    }
  };

  return (
    <Container>
      <h1>Cadastro de Aluno</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Coloque o Nome do Aluno"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Coloque o Email do Aluno"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      {mensagem && <p>{mensagem}</p>}
    </Container>
  );
}

export default FormularioAluno;
