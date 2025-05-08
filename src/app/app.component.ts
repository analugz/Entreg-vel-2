import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import { Carros } from './interfaces/Carros';
import { Cliente } from './interfaces/Cliente';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from "./home/home.component";
import { NavComponent } from './components/nav/nav.component';
import { CategoriasComponent } from './components/categorias/categorias.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    CategoriasComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';

  //usando a interface pq precisa usar todos
  carros: Carros[] = [
    { id: 1, nome: "Corsa", marca: "GM", ano: 1996, cor: "azul" },
    { id: 1, nome: "Celta", marca: "GM", ano: 2000, cor: "preto" },
    { id: 1, nome: "Onix", marca: "GM", ano: 2008, cor: "cinza" }
  ]
}
