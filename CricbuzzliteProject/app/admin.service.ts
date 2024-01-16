import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  loginAdmin(admin: { username: string, password: string }): Observable<any> {
    
    const loginUrl = `${this.baseUrl}/login`;

    // Send a POST request with the admin credentials
    return this.http.post(loginUrl, admin);
  }
  logoutAdmin(): Observable<any> {
    const logoutUrl = `${this.baseUrl}/logout`;

    // Send a POST request to logout
    return this.http.post(logoutUrl, {});
  }

}

