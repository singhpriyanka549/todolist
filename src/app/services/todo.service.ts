import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


export const SERVER_URL: string = "https://jsonplaceholder.typicode.com/todos";


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  public getTodo() {
    return this.http.get(SERVER_URL, httpOptions);
  }
}
