import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Hero } from '../models/heroes';

@Component({
  selector: 'app-comic-book-heroes',
  templateUrl: './comic-book-heroes.component.html',
  styleUrls: ['./comic-book-heroes.component.css'],
})
export class ComicBookHeroesComponent implements OnInit {
  heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'alias', 'publisher'];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getHeroes()
      .subscribe((result: Hero[]) => (this.heroes = result));
  }
}
