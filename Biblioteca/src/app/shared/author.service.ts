import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
    this.http = http;
  }
  getAuthor() {
    return this.http.get('https://fakerestapi.azurewebsites.net/api/Authors');
  }
}
