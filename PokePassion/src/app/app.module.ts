import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; // Importar ngx-pagination
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PokemonsViewsComponent } from './pokemons-views/pokemons-views.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { PokemonForTypeComponent } from './pokemon-for-type/pokemon-for-type.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FavListComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    PokemonsViewsComponent,
    NavbarComponent,
    PokemonTypesComponent,
    PokemonForTypeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule // Agregar NgxPaginationModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
