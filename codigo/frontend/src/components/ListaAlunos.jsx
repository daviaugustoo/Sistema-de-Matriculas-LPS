import { useEffect, useState } from "react";
import api from "../services/api";

function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);


  useEffect(() => {
    api.get("/alunos").then((response) => {
      setAlunos(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Alunos</h2>
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
