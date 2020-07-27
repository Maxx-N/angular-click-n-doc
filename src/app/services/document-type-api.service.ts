import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentTypeApiService {
  private mainPath: string = 'api';

  constructor(private httpClient: HttpClient) {}

  getAllDocumentTypes(): Observable<any> {
    return this.httpClient.get<any>(
      `${this.mainPath}/DocumentTypeApi`
    );
  }
}
