import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cricket } from './cricket';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  getCricketDetails() {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:8080/crickets";
  constructor(private httpClient: HttpClient) { }
  
  getCricketList(): Observable<Cricket[]>{
    return this.httpClient.get<Cricket[]>(`${this.baseURL}`);// $ fetching value 
  }

  createCricket(cricket: Cricket): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cricket);
  }

  getCricketById(id: number): Observable<Cricket>{
    return this.httpClient.get<Cricket>(`${this.baseURL}/${id}`);
  }

  updateCricket(id: number, cricket: Cricket): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cricket);
  }
  
  deleteCricket(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getCricketInfoById(id: number): Observable<Cricket>{
    return this.httpClient.get<Cricket>(`${this.baseURL}/${id}`);
  }
  

}
