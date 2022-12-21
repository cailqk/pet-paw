import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AuthenticationModule } from '../authentication/authentication.module';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AuthenticationModule
  ],
  exports: [
    CatalogComponent
  ]

})
export class MainModule { }
