import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreviewComponent } from './Components/addreview/addreview.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ReviewComponent } from './Components/review/review.component';

const routes: Routes = 
[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'addreview', component: AddreviewComponent },
  { path: 'review' , component: ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
