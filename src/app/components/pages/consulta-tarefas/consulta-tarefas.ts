import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta-tarefas',
  imports: [
    CommonModule, //Diretivas comuns do Angular
    FormsModule,  //Diretivas de formulários do Angular
    ReactiveFormsModule //Diretivas de formulários reativos do Angular
  ],
  templateUrl: './consulta-tarefas.html',
  styleUrl: './consulta-tarefas.css'
})
export class ConsultaTarefas {

  //Atributos
  private http = inject(HttpClient);

  //Criando um formulário reativo
  formulario = new FormGroup({ //formulário
    dataHoraInicio : new FormControl(''), //campo
    dataHoraFim : new FormControl(''), //campo
  });

  //Função para capturar o submit do formulário
  onSubmit() {
    
    //capturando os dados do formulário
    const dataHoraInicio = this.formulario.value.dataHoraInicio;
    const dataHoraFim = this.formulario.value.dataHoraFim;

    //enviando uma requisição HTTP para o backend
    this.http.get('http://localhost:5170/api/tarefas/' + dataHoraInicio + '/' + dataHoraFim)
      .subscribe(response => { //aguardando a resposta do backend
          console.table(response); //exibindo a resposta no console
      });
  }
}
