import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NamedAPIResource } from 'pokenode-ts';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrl: './fav-list.component.scss',
})
export class FavListComponent {
  public favorites: NamedAPIResource[] = [];
  public currentPage: number = 1;
  public pokemonsPerPage: number = 10;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.getFavorites().subscribe((favorites)=>
      this.favorites=favorites
    );
  }
}
