import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeApiService {
  private mainPath = 'api';

  constructor(private httpClient: HttpClient) {}

  getAllDocumentTypes(): Observable<any> {
    return this.httpClient.get<DocumentType>(`${this.mainPath}/DocumentTypeApi`);
  }
}
