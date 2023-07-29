import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicBookCardsComponent } from '../comic-book-cards.component';
import { ComicBook } from 'src/app/models/comicBooks';
import { ComicBooksService } from 'src/app/services/comic-books.service';

@Component({
  selector: 'app-comic-book-dialog',
  templateUrl: './comic-book-dialog.component.html',
  styleUrls: ['./comic-book-dialog.component.css'],
})
export class ComicBookDialogComponent {
  @Output() updatedItems = new EventEmitter<ComicBook[]>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: ComicBook,
    private comicBooksService: ComicBooksService
  ) {}

  insertComic(comic: ComicBook) {
    this.comicBooksService
      .createComicBook(comic)
      .subscribe((result: ComicBook[]) => this.updatedItems.emit(result));
  }

  updateComic(comic: ComicBook) {
    this.comicBooksService
      .updateComicBook(comic)
      .subscribe((result: ComicBook[]) => this.updatedItems.emit(result));
  }

  deleteComic(id: number) {
    this.comicBooksService
      .deleteComicBook(id)
      .subscribe((result: ComicBook[]) => {
        this.comicBooksService
          .getComicBooks()
          .subscribe((result: ComicBook[]) => this.updatedItems.emit(result));
      });
  }
}
