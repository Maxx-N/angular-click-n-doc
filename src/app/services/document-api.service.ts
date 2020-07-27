import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private mainPath: string = 'api';

  constructor(private httpClient: HttpClient) {}

  getAllDocuments(): Observable<User> {
    return this.httpClient.get<User>(
      `${this.mainPath}/DocumentApi`
    );
  }
}
