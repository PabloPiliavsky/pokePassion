import { Component, Input, OnInit } from '@angular/core';
import { PokemonObjectType, Type } from './interfaces';
import { COLOR_BY_TYPE } from '../common/constants';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  
  @Input() public name: string = "";
  @Input() public url: string = "";
  public img: string = "";
  public id: number=null;
  public types: Type[] = [];
  private colorMapping: Map<string, string> = new Map<string, string>(COLOR_BY_TYPE);//podria mejorarse usando la interface de TypeData
  public typeColor: string = "";


  public pokemon: PokemonObjectType = null; //en vez de poner uno por dato, llamo a todo el json y lo llamo en el component.html por su nombre de la interfaz
  //armar la foto con <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" /> usando el pokemon.id
  async ngOnInit(): Promise<void> {
    const response: Response = await fetch(this.url);
    this.pokemon = await response.json();
    this.id = this.pokemon.id;
    this.types = this.pokemon.types;
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
    this.typeColor = this.colorMapping.get(this.pokemon.types[0].type.name);
  }



  
  
}
