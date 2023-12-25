import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient,
  ){ 
  }

  registerUser(userName: any, status: any, password: any, email: any): Observable<any>{
    const userData = {userName, status, password, email};
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userName: any, password: any){
    const userCredentials = {userName, password};
    return this.http.post(`${this.apiUrl}/login`, userCredentials);
  }

  loadNavigation(){
      const userName = localStorage.getItem('user');  
      // Construct an object with the username
      const body = { userName: userName };
    
      return this.http.post(`${this.apiUrl}/navigation`, body);
  }
}
