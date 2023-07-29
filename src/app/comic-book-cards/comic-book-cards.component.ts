import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ComicBookDialogComponent } from './comic-book-dialog/comic-book-dialog.component';
import { ComicBooksService } from '../services/comic-books.service';
import { ComicBook } from '../models/comicBooks';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-comic-book-cards',
  templateUrl: './comic-book-cards.component.html',
  styleUrls: ['./comic-book-cards.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgFor,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatIconModule,
  ],
})
export class ComicBookCardsComponent implements OnInit {
  @Input() comicToAdd?: ComicBook;

  value = '';
  comicBooks: ComicBook[] = [];

  constructor(
    public comicDialog: MatDialog,
    private comicBooksService: ComicBooksService
  ) {}

  ngOnInit(): void {
    this.comicBooksService
      .getComicBooks()
      .subscribe((result: ComicBook[]) => (this.comicBooks = result));
  }

  filterResults(text: string) {
    if (!text) {
      this.comicBooksService
        .getComicBooks()
        .subscribe((result: ComicBook[]) => (this.comicBooks = result));
    }

    this.comicBooks = this.comicBooks.filter((comicBook) =>
      comicBook.title?.toLowerCase().includes(text.toLowerCase())
    );
  }

  initNewComic() {
    this.comicToAdd = new ComicBook();
  }

  openDialog(comic?: ComicBook) {
    if (comic) {
      this.comicToAdd = comic;
    } else {
      this.initNewComic();
    }

    const dialogRef = this.comicDialog.open(ComicBookDialogComponent, {
      data: this.comicToAdd,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.comicBooksService
        .getComicBooks()
        .subscribe((result: ComicBook[]) => (this.comicBooks = result));
    });
  }
}
