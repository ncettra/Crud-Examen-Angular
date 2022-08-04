import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/body/home/home.component';
import { OtroComponent } from './components/body/otro/otro.component';
import { IndexProductsComponent } from './components/body/products/index-products/index-products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'otro', component: OtroComponent },
  { path: 'productos', component: IndexProductsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
