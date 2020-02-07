import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
