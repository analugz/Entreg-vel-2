import { Injectable } from '@angular/core';
//importamos pois vamos usar
import { Cliente } from '../interfaces/Cliente';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:3000/clientes'; //URL da API

  clientes: Cliente[]=[]

  //injeção de dependência do http
  constructor(private http:HttpClient) {

  }

  list() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]>;
  }

  //retornar a lista de clientes
  //list(): Cliente[]{
   // return this.clientes;
  //}

  //método para remover um cliente
  remove(id:string){
    const cliente = this.clientes.find(c => c.id == id) //buscar cliente na lista

    if(cliente){ // se encontra o cliente
      const index = this.clientes.indexOf(cliente)
      //remove da lista
      this.clientes.splice(index,1)
    }
  }

  //método para adicionar cliente
  add(cliente:Cliente){
    const httpHeaders =
    {
      headers :{
        'Content-type' : 'application/json'
      }
    }

    return this.http.post(this.apiUrl, cliente, httpHeaders);
  }

  update(id:string, cliente:Cliente){
    const index = this.clientes.findIndex(c => c.id == id)

    if(index !== -1){
      this.clientes[index]=
      {
        ...this.clientes[index],
        ...cliente
      }
    }
  }


}
