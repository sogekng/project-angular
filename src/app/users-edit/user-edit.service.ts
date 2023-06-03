import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../entities/user.entities";
import { UsersEditComponent } from "./users-edit.component"

@Injectable({
  providedIn: "root"
})

export class ServiceUserEdit{
  constructor(private http: HttpClient){}

  updateUsers(user: User, id: number, username: string, cpf: string, rg: string): Observable<any>{
    console.log(user);
    const body = JSON.stringify({id: id, username: username, cpf: cpf, rg: rg});

    return this.http.request('PUT', 'http://localhost:8080/user/' + `${id}` + '/edit', {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: body
    })
  }

  getUserById(id: number): Observable<User> {
    const url = 'http://localhost:8080/user/' + `${id}`;
    return this.http.get<User>(url);
  }

}
