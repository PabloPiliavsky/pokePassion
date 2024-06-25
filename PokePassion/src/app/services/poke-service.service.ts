import { Injectable } from '@angular/core';
import { NamedAPIResourceList, PokemonClient, Type } from 'pokenode-ts'; // import the PokemonClient (EggGroups enum is fully optional)

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private pokeApi: PokemonClient = null;

  constructor() {
    this.pokeApi = new PokemonClient(); // create a PokemonClient
  }

  public async getPokemonList() :Promise<NamedAPIResourceList>{
    return await this.pokeApi
    .listPokemons(0,1302); // es la cantidad que figura en la api
  }

  public async getPokemonListByType(id: string) :Promise<Type>{
    return await this.pokeApi.getTypeById(Number(id));
  }
}