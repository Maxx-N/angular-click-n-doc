import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentApiService {
  private mainPath: string = 'api';

  constructor(private httpClient: HttpClient) {}

  getAllDocuments(): Observable<any> {
    return this.httpClient.get<Document>(
      `${this.mainPath}/DocumentApi`
    );
  }
}
