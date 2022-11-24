import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CatalogComponent
  ]

})
export class MainModule { }
