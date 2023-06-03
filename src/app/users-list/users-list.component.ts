import { Component, OnInit } from '@angular/core';
import { ServiceUserList } from './user-list.service';
import { User } from '../entities/user.entities';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  constructor(private service: ServiceUserList) { }

  userList: User[] = [];

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.service.getUsers().subscribe(resp=> {
      this.userList = resp;
      for(let user of this.userList){
        user.cpf = this.cpfFormat(user.cpf);
        user.rg = this.rgFormat(user.rg);
        console.log(user);
      }
    });
  }

  remove(user: User): void {
    this.service.removeUser(user).subscribe(resp=> {
      this.loadList();
    });
  }

  cpfFormat(cpf: string): string {

    const part1 = cpf.substring(0, 3);
    const part2 = cpf.substring(3, 6);
    const part3 = cpf.substring(6, 9);
    const part4 = cpf.substring(9, 11);

    return `${part1}.${part2}.${part3}-${part4}`;
  }

  rgFormat(rg: string): string {

    const part1 = rg.substring(0, 2);
    const part2 = rg.substring(2, 5);
    const part3 = rg.substring(5, 8);
    const part4 = rg.substring(8, 9);

    return `${part1}.${part2}.${part3}-${part4}`;
  }
}
