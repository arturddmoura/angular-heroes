import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { comicBooks, ComicBook } from './comic-books-mock-data';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ComicBookDialogComponent } from './comic-book-dialog/comic-book-dialog.component';

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
export class ComicBookCardsComponent {
  @Input() item?: ComicBook;

  value = '';
  comicBooks = comicBooks;
  filteredComicBooks: ComicBook[] = [];

  constructor(public comicDialog: MatDialog) {
    this.comicBooks = comicBooks;
    this.filteredComicBooks = this.comicBooks;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredComicBooks = this.comicBooks;
    }

    this.filteredComicBooks = this.comicBooks.filter((comicBook) =>
      comicBook.title?.toLowerCase().includes(text.toLowerCase())
    );
  }

  deleteItem(id: number) {
    this.comicBooks = this.comicBooks.filter((item) => item.id !== id);
    this.filteredComicBooks = this.filteredComicBooks.filter(
      (item) => item.id !== id
    );
  }

  initNewItem() {
    this.item = new ComicBook();
    this.item.id = this.comicBooks.length + 1;
  }

  public addItem(item: ComicBook) {
    this.comicBooks.push(item);
    this.filteredComicBooks.push(item);
  }

  openDialog() {
    const dialogRef = this.comicDialog.open(ComicBookDialogComponent, {
      data: this.item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
