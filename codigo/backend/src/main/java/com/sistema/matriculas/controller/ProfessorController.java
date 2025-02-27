package com.sistema.matriculas.controller;

import com.sistema.matriculas.model.Professor;
import com.sistema.matriculas.repository.ProfessorRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/professores")
@CrossOrigin(origins = "http://localhost:8080")
public class ProfessorController {

    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping
    public List<Professor> listarTodos() {
        return professorRepository.findAll();
    }

    @PostMapping
    public Professor cadastrar(@RequestBody Professor professor) {
        return professorRepository.save(professor);
    }
}