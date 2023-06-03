import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../entities/user.entities";

@Injectable({
  providedIn: "root"
})

export class ServiceUserAdd{
  constructor(private http: HttpClient){}

  addUsers(username: string, cpf: string, rg: string): Observable<any>{

    const body = JSON.stringify({username: username, cpf: cpf, rg: rg});

    return this.http.request('POST', 'http://localhost:8080/user', {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: body
    })
  }

}
