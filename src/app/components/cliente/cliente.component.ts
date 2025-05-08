import { ClienteService } from './../../services/cliente.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/Cliente'; //interface par interagir com a service
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

  clienteForm : FormGroup = new FormGroup({});
  clientes: Cliente[] = [];
  clienteIdEdicao: string | null = null;

  //injeção --- nome escolhido --- objeto injetado
  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder){
    this.clienteForm = formBuilder.group({
      nome: ['', Validators.required], //obrigatório
      telefone: ['']
    })
  }

  list(): void{
    this.clienteService.list().subscribe((resposta) => (this.clientes = resposta))
  }

  //métoo executado ao inicializar a página
  ngOnInit(): void{
    this.list()
  }

  //método para gerar uma quantidade de Strings aleatórios
  generateRandomString(length: number): string  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  save(){
    if(this.clienteForm.valid){
      const formData = this.clienteForm.value; // para que a variável possa conter todos os campos do formulário

      if(this.clienteIdEdicao){
        //se estiver nulo, faz a inserção de um novo cliente
        const clienteUpdate: Cliente = {
          id:this.clienteIdEdicao, //usa o mesmo id
          nome:formData.nome,
          telefone:formData.telefone
        }
        this.clienteService.update(this.clienteIdEdicao, clienteUpdate);
        this.clienteIdEdicao = null //depois que usarmos coloca como null para o botão save voltar
        alert('Alterado com sucesso!')

      }else{
        const clienteAdd: Cliente ={
          id: this.generateRandomString(6), //gera 6 caracteres aleatoriamente
          nome: formData.nome,
          telefone: formData.telefone
        }
        //console.log(clienteAdd)
        //para o post, adicione o subscribe(); e adicione o this.list(); para recarregar
        this.clienteService.add(clienteAdd).subscribe(); //chamando a service para inserir
        alert('Inserido com sucesso') //enviando feedback para usuário
        //this.list() chamar service e recarrega com o item inserido
      }


    }else{
      alert('Por favor, preencher os campos obrigatórios!')
    }
    this.clienteForm.reset() //limpar o form após preenchimento
    this.list();
  }

  editar(id: string): void {
    // parametro para poder buscar
    //buscando todos os clientes e filtrando pelo id enviado como parametro
    //console.log(this.clienteService.list())
    // const cliente = this.clienteService.list().find(c => c.id == id)

    // if(cliente){
    //   this.clienteIdEdicao= cliente.id;

    //   //atribuir os valores ao formulário
    //   this.clienteForm.patchValue(
    //     {
    //       nome: cliente.nome,
    //       telefone: cliente. telefone
    //     }
    //   )
    // }
  }

  remover(id:string):void{
    this.clienteService.remove(id)
  }


}
