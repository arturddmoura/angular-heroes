import { Component, Inject, Input } from '@angular/core';
import { ComicBook } from '../comic-books-mock-data';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicBookCardsComponent } from '../comic-book-cards.component';

@Component({
  selector: 'app-comic-book-dialog',
  templateUrl: './comic-book-dialog.component.html',
  styleUrls: ['./comic-book-dialog.component.css'],
})
export class ComicBookDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public item: ComicBook) {}
}
