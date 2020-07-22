import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTypeListComponent } from './document-type-list/document-type-list.component';

@NgModule({
  declarations: [DocumentTypeListComponent],
  imports: [CommonModule],
  exports: [DocumentTypeListComponent],
})
export class DocumentTypeModule {}
