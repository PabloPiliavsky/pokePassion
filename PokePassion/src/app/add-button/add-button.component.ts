import { Component, Input } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { NamedAPIResource } from 'pokenode-ts';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Input() public pokemon: NamedAPIResource = null;

  constructor(private favoritesService: FavoritesService){

  }

  addFavorite() : void {
    this.favoritesService.addFavorite(this.pokemon);
  }
}
