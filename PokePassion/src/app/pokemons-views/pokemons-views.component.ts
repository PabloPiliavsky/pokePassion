import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NamedAPIResource } from 'pokenode-ts';
import { PokeService } from '../services/poke-service.service';

@Component({
  selector: 'app-pokemons-views',
  templateUrl: './pokemons-views.component.html',
  styleUrls: ['./pokemons-views.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PokemonsViewsComponent implements OnInit {
  public pokemons: NamedAPIResource[] = [];
  public currentPage: number = 1;
  public pokemonsPerPage: number = 16;

  constructor(private pokeService: PokeService) {}

  public async ngOnInit(): Promise<void> {
    this.pokemons = (await this.pokeService.getPokemonList()).results;
    console.log('All Pokemons:', this.pokemons);
  }
}