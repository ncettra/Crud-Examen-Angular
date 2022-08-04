import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexProductsComponent } from './components/body/products/index-products/index-products.component';

import { HomeComponent } from './components/body/home/home.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { FormsModule } from '@angular/forms'; //ESTO ES CLAVE PARA QUE FUNCIONEN LOS FORMULARIOS
import { HttpClientModule } from '@angular/common/http';
import { OtroComponent } from './components/body/otro/otro.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexProductsComponent,
    HomeComponent,
    BodyComponent,
    HeaderComponent,
    MenuComponent,
    OtroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //<--

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
