import { Component } from '@angular/core';
import { COLOR_BY_TYPE_WITH_IMG, TypeData } from '../common/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styleUrl: './pokemon-types.component.scss'
})
export class PokemonTypesComponent {

  public typeData: TypeData[] = COLOR_BY_TYPE_WITH_IMG;
  public currentPage: number = 1;
  public typesPerPage: number = 16;

  constructor(private router: Router) {
  }

  public navigateTo(route: string): void{
    this.router.navigate([route]);
  }

}

//https://pokeapi.co/api/v2/type/