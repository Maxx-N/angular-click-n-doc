import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentListComponent } from 'src/modules/document/document-list/document-list.component';
import { DocumentTypeListComponent } from 'src/modules/document-type/document-type-list/document-type-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentListComponent },
  { path: 'document-types', component: DocumentTypeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
