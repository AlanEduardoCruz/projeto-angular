import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {


  // Variavel média
  media: number = 4;

  // Vetor

  nomes: string[] = ['Alan', 'Ana', 'Danilo', 'Camila']

  // Linguage,

  linguagem: string = 'PHP';



}
