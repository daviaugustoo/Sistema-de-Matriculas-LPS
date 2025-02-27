package com.sistema.matriculas.controller;

import com.sistema.matriculas.repository.AlunoRepository;
import com.sistema.matriculas.repository.DisciplinaRepository;
import com.sistema.matriculas.model.Aluno;
import com.sistema.matriculas.model.Disciplina;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/matricula")
@CrossOrigin(origins = "http://localhost:8080")
public class SistemaMatriculaController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private DisciplinaRepository disciplinaRepository;

    @PostMapping("/registrarAluno")
    public String registrarAluno(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
        return "Aluno registrado com sucesso!";
    }

    @PostMapping("/matricular")
    public String efetuarMatricula(@RequestParam Long alunoId, @RequestParam Long disciplinaId) {
        Aluno aluno = alunoRepository.findById(alunoId.toString()).orElse(null);
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId).orElse(null);

        if (aluno != null && disciplina != null) {
            aluno.getDisciplinasMatriculadas().add(disciplina);
            alunoRepository.save(aluno);
            return "Matrícula realizada com sucesso!";
        }
        return "Aluno ou disciplina não encontrados!";
    }

    @PostMapping("/cancelarMatricula")
    public String cancelarMatricula(@RequestParam Long alunoId, @RequestParam Long disciplinaId) {
        Aluno aluno = alunoRepository.findById(alunoId.toString()).orElse(null);
        Disciplina disciplina = disciplinaRepository.findById(disciplinaId).orElse(null);

        if (aluno != null && disciplina != null) {
            aluno.getDisciplinasMatriculadas().remove(disciplina);
            alunoRepository.save(aluno);
            return "Matrícula cancelada com sucesso!";
        }
        return "Aluno ou disciplina não encontrados!";
    }
}