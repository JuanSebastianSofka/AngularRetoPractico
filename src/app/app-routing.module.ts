import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/principal/main/main.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'rick-morty',
    component: RickMortyComponent
  },
  {
    path:'personajes',
    component: PersonajesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
