import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicBookCardsComponent } from './comic-book-cards/comic-book-cards.component';

const routes: Routes = [
  { path: 'comic-book-cards', component: ComicBookCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
