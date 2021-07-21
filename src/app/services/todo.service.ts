import { Injectable } from '@angular/core';



export const SERVER_URL: string = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
