import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
 // importar o ReactiveFormsModule
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private ClienteService: ClienteService) { 
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      nascimento: ['', [Validators.required]]

    })
  }

  ngOnInit() {
  }
  cadastrar(){
    this.ClienteService.insert(this.formGroup.value)
    .subscribe(response => {
      console.log("Cadastrado com sucesso");
    }, error => {
      console.log("Erro ao cadastrar");
    })
  console.log(this.formGroup.value);
}
}
