package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.sistema.matriculas.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {
}
