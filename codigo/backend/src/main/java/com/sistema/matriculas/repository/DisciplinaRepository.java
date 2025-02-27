package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.Disciplina;

public interface DisciplinaRepository extends MongoRepository<Disciplina, Long> {
}
