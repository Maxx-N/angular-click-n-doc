import { Component, OnInit } from '@angular/core';
import { DocumentApiService } from 'src/app/services/document-api.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent implements OnInit {
  retrievedDocuments: any;
  constructor(private documentApiService: DocumentApiService) {}

  ngOnInit(): void {
    this.retrievedDocuments = this.documentApiService.getAllDocuments();
  }
}
