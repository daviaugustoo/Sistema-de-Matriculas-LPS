package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.model.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
}
