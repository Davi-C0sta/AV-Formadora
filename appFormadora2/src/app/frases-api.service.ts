
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class FrasesAPIService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'DEMO_KEY';  

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
}






