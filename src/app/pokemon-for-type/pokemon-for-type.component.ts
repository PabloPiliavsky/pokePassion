import { Component, OnInit } from '@angular/core';
import { TypePokemon } from 'pokenode-ts';
import { PokeService } from '../services/poke-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-for-type',
  templateUrl: './pokemon-for-type.component.html',
  styleUrl: './pokemon-for-type.component.scss'
})
export class PokemonForTypeComponent implements OnInit{

      public pokemons: TypePokemon[] = [];
      public currentPage: number = 1;
      public pokemonsPerPage: number = 16;
      constructor(private pokeService: PokeService, private activatedRoute : ActivatedRoute) {
    }

    public async ngOnInit():Promise<void> { //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
      const typeId : string = this.activatedRoute.snapshot.paramMap.get('typeId');
      this.pokemons = (await this.pokeService.getPokemonListByType(typeId)).pokemon; // muestra en consola la lista de pokemones
    }
}
