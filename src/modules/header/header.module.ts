import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    RouterModule,
  ],
  exports: [NavbarComponent],
})
export class HeaderModule {}
