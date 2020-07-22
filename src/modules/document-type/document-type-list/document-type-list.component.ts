import { Component, OnInit } from '@angular/core';
import { DocumentTypeApiService } from '../../../app/services/document-type-api.service';

@Component({
  selector: 'app-document-type-list',
  templateUrl: './document-type-list.component.html',
  styleUrls: ['./document-type-list.component.scss'],
})
export class DocumentTypeListComponent implements OnInit {
  retrievedDocumentTypes: any;

  constructor(private documentTypeApiService: DocumentTypeApiService) {}

  ngOnInit(): void {
    this.retrievedDocumentTypes = this.documentTypeApiService.getAllDocumentTypes();
  }
}
