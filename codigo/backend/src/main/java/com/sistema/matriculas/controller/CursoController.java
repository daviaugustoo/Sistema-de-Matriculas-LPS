package com.sistema.matriculas.controller;

import com.sistema.matriculas.model.Curso;
import com.sistema.matriculas.repository.CursoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cursos")
@CrossOrigin(origins = "")
public class CursoController {

    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping
    public List<Curso> listarTodos() {
        return cursoRepository.findAll();
    }

    @PostMapping
    public Curso cadastrar(@RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }
}