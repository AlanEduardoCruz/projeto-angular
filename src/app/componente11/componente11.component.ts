import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  // Objeto de formulario

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  // Visibilidade dos botoes

  btnCadastrar: boolean = true;

  // Vetor
  vetor: Pessoa[] = [];

  // Armazenar indice da pesoa seleiconada
  indice: number = -1;

  // função de cadastro
  cadastrar() {
    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // visualização via console
    //console.table(this.vetor);

  }

  // Função seleção

  selecionar(indice: number) {

    // atribuir o indice da pessoa
    this.indice = indice;

    // atribuir pessoa no formulario

    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade

    });

    // visibilidade dos botoes

    this.btnCadastrar = false;


  }


  // função de alteração

  alterar() {

    // Alterar vetor

    this.vetor[this.indice] = this.formulario.value as Pessoa;


    // Limpar inputs
    this.formulario.reset();

    // visibilidade de botoes

    this.btnCadastrar = true;
  }


  // função de remoção

  remover() {

    // removendo pessoa

    this.vetor.splice(this.indice, 1);

    // Limpeza dos inputs

    this.formulario.reset();

    // visibilidade dos botoes

    this.btnCadastrar = true;

  }

  // função de cancelamento

  cancelar() {
    // limpeza
    this.formulario.reset()

    // visibilidade dos botoes
    this.btnCadastrar = true;
  }

}
