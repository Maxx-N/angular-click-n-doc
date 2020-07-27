import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentTypeModule } from '../modules/document-type/document-type.module';
import { DocumentModule } from '../modules/document/document.module';
import { HeaderModule } from '../modules/header/header.module';
import { AuthenticationModule } from '../modules/authentication/authentication.module';

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
    HeaderModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
