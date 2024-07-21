import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsViewsComponent } from './pokemons-views/pokemons-views.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { PokemonForTypeComponent } from './pokemon-for-type/pokemon-for-type.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsViewsComponent,
  },
  {
    path: 'verTodos',
    component: PokemonsViewsComponent,
  },
  {
    path: 'verTipos',
    component: PokemonTypesComponent,
  },
  {
    path: 'verTipo/:typeId',
    component: PokemonForTypeComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
