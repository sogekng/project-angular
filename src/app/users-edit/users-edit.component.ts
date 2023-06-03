import { Component, OnInit } from '@angular/core';
import { ServiceUserEdit } from './user-edit.service';
import { User } from '../entities/user.entities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit{
  user = {
    id: 0,
    username: '',
    cpf: '',
    rg: ''
  };

  constructor(private route: ActivatedRoute, private service: ServiceUserEdit) { }

  ngOnInit(): any {
    const userId = this.route.snapshot.params['id'];
    this.service.getUserById(userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  edit(): void {
    if (!this.empty()){
      this.service.updateUsers(this.user, this.user.id, this.user.username, this.user.cpf, this.user.rg).subscribe(resp => {
        alert("Usuario Atualizado!");
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
