import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentTypeModule } from '../modules/document-type/document-type.module';
import { DocumentModule } from '../modules/document/document.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentTypeModule,
    HttpClientModule,
    DocumentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
