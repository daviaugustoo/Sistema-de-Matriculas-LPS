import React, { useState } from "react";
import api from "../services/api";
import { Form, Button, Container } from "react-bootstrap";

function FormularioAluno() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/alunos", {nome});
      setMensagem("Aluno criado com sucesso!");
      setNome("");
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
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      {mensagem && <p>{mensagem}</p>}
    </Container>
  );
}

export default FormularioAluno;
