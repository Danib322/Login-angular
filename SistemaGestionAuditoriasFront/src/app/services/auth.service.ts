import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(data: { userName: string, password: string }) {
    return this.httpClient.post('https://localhost:7169/api/auth/login', data, {responseType: 'text'})
      .pipe(tap(jwt => {
        localStorage.setItem('jwt', jwt);
      }));
  }
}
