package com.sistema.matriculas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "secretarias")
public class Secretaria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "Disciplina")
    private List<Disciplina> listaDisciplinas;

    // Getters e Setters

    private Long getId(){
        return this.id
    }

    private List<Disciplina> getListaDisciplinas(){
        return this.listaDisciplinas
    }

    private void setListaDisciplinas(List<Disciplina> lista){
        this.listaDisciplinas = lista;
    }   

}