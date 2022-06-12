import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactercardComponent } from './pages/characters/components/charactercard/charactercard.component';
import { CharacterdetailComponent } from './pages/characterdetail/characterdetail.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    CharactersComponent,
    HomeComponent,
    CharactercardComponent,
    CharacterdetailComponent,
    PeliculasComponent,
    ContactoComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
