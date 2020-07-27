import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, PersonData } from '../interfaces/person';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private mainPath: string = 'api';

  constructor(private httpClient: HttpClient) {}

  getAllPersons(): Observable<PersonData[]> {
    return this.httpClient.get<PersonData[]>(`${this.mainPath}/PersonApi/GetPersons`);
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.mainPath}/UserApi`);
  }
}
