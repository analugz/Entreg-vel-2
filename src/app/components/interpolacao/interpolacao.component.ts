import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  standalone: true,
  //precisa importar o commun para usar o for, if e etc
  imports: [CommonModule],
  templateUrl: './interpolacao.component.html',
  styleUrl: './interpolacao.component.css'
})
export class InterpolacaoComponent {
name: String = 'Thiago';
age: number = 39;
job = 'Developer';
hobbies = ['Music', 'Sports', 'Movies'];
car = {make: 'Ford', model: 'Fiesta'}; //objeto
//para exibir uma imagem busque uma imagem na web e salve dentro da pasta assets
imageUrl = '../../../assets/angular.png';

}
