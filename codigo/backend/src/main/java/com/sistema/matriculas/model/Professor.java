package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Data
@Document(collection = "professores")
public class Professor {
    @Id
    private Long id;

    private String nome;
    private String senha;   
    
    @DBRef
    private List<Disciplina> disciplinasMinistradas;

    // Getters e Setters

    public Long getId(){
        return this.id;
    }

    public String getNome(){
        return this.nome;
    }

    public String getSenha(){
        return this.senha;
    }

    public List<Disciplina> getDisciplinasMinistradas(){
        return this.disciplinasMinistradas;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public void setDisciplinasMinistradas(List<Disciplina> lista){
        this.disciplinasMinistradas = lista;
    }
}