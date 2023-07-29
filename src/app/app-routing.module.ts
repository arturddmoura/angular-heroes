import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicBookCardsComponent } from './comic-book-cards/comic-book-cards.component';
import { ComicBookHeroesComponent } from './comic-book-heroes/comic-book-heroes.component';

const routes: Routes = [
  { path: '', component: ComicBookHeroesComponent },
  { path: 'comic-book-cards', component: ComicBookCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
