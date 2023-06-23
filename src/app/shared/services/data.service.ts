import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl = 'http://localhost:3000/posts'
  constructor(private http : HttpClient) { }

  getApi(){
    return this.http.get(this.baseUrl)
  }
}
