package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "alunos")
public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String matricula;
    private String nome;
    private String senha;

    @ManyToMany
    private List<Disciplina> disciplinasMatriculadas;

    // Getters e Setters

    public Long getId(){
        return this.id;
    }

    public String getMatricula(){
        return this.matricula;
    }

    public String getNome(){
        return this.nome;
    }

    public String getSenha(){
        return this.senha;
    }

    public List<Disciplina> getDisciplinasMatriculadas(){
        return this.disciplinasMatriculadas;
    }

    public void setMatricula(String matricula){
        this.matricula = matricula;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public void setDisciplinasMatriculadas(List<Disciplina> disciplinas){
        this.disciplinasMatriculadas = disciplinas;
    }

}