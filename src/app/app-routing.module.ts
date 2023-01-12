import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProfileComponent } from './core/profile/profile.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { CreateComponent } from './main/create/create.component';
import { DetailsComponent } from './main/details/details.component';
import { EditComponent } from './main/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'catalog/:id',
    component: DetailsComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'auth/logout',
    canActivate: [AuthGuard],
    component: LogoutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuard],
    component: EditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
