import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { MainComponent } from './components/principal/main/main.component';
import { HeaderComponent } from './components/principal/header/header.component';
import { MenuComponent } from './components/principal/menu/menu.component';
import { LayoutComponent } from './components/principal/layout/layout.component';
import { FooterComponent } from './components/principal/footer/footer.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RickMortyComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
