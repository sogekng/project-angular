import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../entities/user.entities";

@Injectable({
  providedIn: "root"
})

export class ServiceUserList{
  constructor(private http: HttpClient){

  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(
      "http://localhost:8080/user"
    );
  }

  removeUser(user: User): Observable<any>{
    const body = JSON.stringify(user);

    return this.http.request("DELETE", "http://localhost:8080/user", {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: body
    })
  }
}
