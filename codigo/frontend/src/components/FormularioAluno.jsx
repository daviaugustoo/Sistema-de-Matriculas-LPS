import React from "react";
import { useState } from "react";
import api from "../services/api";
import { Form, Button, Paper, Container } from "react-bootstrap"


function FormularioAluno() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/alunos", { nome, email });
    window.location.reload();
  };

  return (
    <h1>asasa</h1>
    // <Container>
    //   <Paper>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group>
    //         <Form.Label>Nome</Form.Label>
    //         <Form.Control type="text" placeholder="Coloque o Nome do Aluno" onChange={(event) => { setNome(event.target.value) }} />
    //       </Form.Group>
    //       <Form.Group>
    //         <Form.Label>Email</Form.Label>
    //         <Form.Control type="email" placeholder="Coloque o Email do Aluno" onChange={(event) => { setEmail(event.target.value) }} />
    //       </Form.Group>
    //     </Form>
    //     <Button type="submit">aaaaaa</Button>
    //   </Paper>
    //   <h1>asasasas</h1>
    // </Container >
  );
}

export default FormularioAluno;
