import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NamedAPIResource } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  private favorites: NamedAPIResource[] = [];
  private favoritesSubject: BehaviorSubject<NamedAPIResource[]> = new BehaviorSubject(this.favorites);//objeto para suscribirse, permite que al agregar o sacar pokemones permita que, los componentes subscriptos a ella, puedan mostrar los cambios

  constructor() {
    if(localStorage.getItem("favs")){
      this.favorites= JSON.parse(localStorage.getItem("favs")); //cuando lo guarde en la linea 25, lo converti en json, y ahora lo vuelvo a convertir a NamedAPIResource
      this.favoritesSubject.next(this.favorites);
    }

  }

  getFavorites(): Observable<NamedAPIResource[]> {
    return this.favoritesSubject.asObservable();
  }

  addFavorite(favorite: NamedAPIResource): void {
    const pok= this.favorites.find((pokemon:NamedAPIResource)=>pokemon.name==favorite.name); //uso el name en vez del id porque es el mismo dato que uso para diferenciar en el otro componente de pokemon
    if (!pok) {//esto evita que se repita
      this.favorites.push(favorite);
      localStorage.setItem("favs", JSON.stringify(this.favorites));//localStorage lo uso para guardar en el browser los fav anteriores a cerrar o al recargar
      this.favoritesSubject.next(this.favorites);
    }
  }

  deleteFavorite(favorite: NamedAPIResource): void {
    const index = this.favorites.findIndex((pokemon:NamedAPIResource)=>pokemon.name==favorite.name);
    if (index > -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem("favs", JSON.stringify(this.favorites));//ACA SE ENCARGA DE ACTUALIZAR AL BORRAR
      this.favoritesSubject.next(this.favorites);
    }
  }
}