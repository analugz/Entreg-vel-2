import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DadosComponent } from './components/dados/dados.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

//rotas escolhidas
export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'cliente', component:ClienteComponent}, //se for cliente vai para essa rota
  {path:'control-flow', component: ControlFlowComponent},
  {path: 'dados', component: DadosComponent}, // teste
  {path: 'produto/:id', component:ProdutoDetalheComponent},
  {path: 'categorias', component: CategoriasComponent },
  {path: '**', component:NotfoundComponent} //se for algo que não temos vai para essa rota
];
