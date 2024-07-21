import { Component, Input } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { NamedAPIResource } from 'pokenode-ts';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  @Input() public pokemon: NamedAPIResource = null;

  constructor(private favoritesService: FavoritesService){

  }

  deleteFavorite() : void {
    this.favoritesService.deleteFavorite(this.pokemon);
  }
}
