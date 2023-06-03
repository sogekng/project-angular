import { Component, OnInit } from '@angular/core';
import { ServiceUserAdd } from './user-add.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit{

  constructor(private service: ServiceUserAdd) { }

  user = {
    username: '',
    cpf: '',
    rg: ''
  };

  ngOnInit(): void {}

  save(): void {
    if (!this.empty()){
      this.service.addUsers(this.user.username, this.user.cpf, this.user.rg).subscribe(resp => {
        alert("Usuario Salvo!");
      });
    }
  }

  empty(): boolean {
    if (!this.user.username || !this.user.cpf || !this.user.rg) {
      alert('Por favor, preencha todos os campos');
      return true;
    }

    if(this.user.cpf.length < 11 && this.user.rg.length < 9){
      alert('O campo CPF e o campo RG estão incorretos');
      return true;
    }

    if(this.user.cpf.length < 11){
      alert('O campo CPF está incorreto');
      return true;
    }

    if(this.user.rg.length < 9){
      alert('O campo RG está incorreto');
      return true;
    }

    return false;
  }


}
