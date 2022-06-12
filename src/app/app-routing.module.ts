import { ContactoComponent } from './pages/contacto/contacto.component';
import { CharacterdetailComponent } from './pages/characterdetail/characterdetail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';




const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full"},
  { path: "libros", component: CharactersComponent },
  {path: "libros/:characterID", component: CharacterdetailComponent},
  {path: "peliculas", component: PeliculasComponent},
  {path: "contacto", component: ContactoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
