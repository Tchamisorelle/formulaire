import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:2000/register'; // Remplacez par l'URL de votre API Django

  constructor(private http: HttpClient) { }

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit-form`, formData);
  }
}
