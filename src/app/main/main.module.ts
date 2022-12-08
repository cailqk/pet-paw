import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent
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
