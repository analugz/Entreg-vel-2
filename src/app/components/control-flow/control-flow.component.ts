import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  //angular 16
  //estamos usando essa variável no ngIf do angular 16
  mostrar: boolean = false;
  //no ts ele compara, o texto só aparece se for green
  color: string = "green";
  cores = ["azul", "amarelo", "vermelho"];
  itemSelecionado: string = 'um';
  mes:number = 1;

 // só executa e nn retorna valor
  trocarValor(event: Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement;
    this.itemSelecionado = elementoSelecionado.value;
  }



  constructor(){};

}
