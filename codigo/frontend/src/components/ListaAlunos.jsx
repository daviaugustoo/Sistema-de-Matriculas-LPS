import { useEffect, useState } from "react";
import api from "../services/api";
import { Button } from "react-bootstrap";

function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = async () => {
    try {
      const response = await api.get("/alunos");
      setAlunos(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <Button variant="primary" onClick={fetchAlunos}>
        Atualizar Lista
      </Button>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;
