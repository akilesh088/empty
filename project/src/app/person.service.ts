import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../store/person.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonStorageService {
  private baseUrl = 'http://localhost:3000/persons';

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${person.id}`, person);
  }

  deletePerson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
