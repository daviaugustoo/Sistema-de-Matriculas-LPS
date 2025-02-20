package com.sistema.matriculas.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
