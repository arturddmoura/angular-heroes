import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';
import { ComicBook } from '../models/comicBooks';

@Injectable({
  providedIn: 'root',
})
export class ComicBooksService {
  private apiRoute = 'comics';

  constructor(private http: HttpClient) {}

  public getComicBooks(): Observable<ComicBook[]> {
    return this.http.get<ComicBook[]>(
      `${environment.baseApiUrl}/${this.apiRoute}`
    );
  }

  public createComicBook(comic: ComicBook): Observable<ComicBook[]> {
    return this.http.post<ComicBook[]>(
      `${environment.baseApiUrl}/${this.apiRoute}`,
      comic
    );
  }

  public updateComicBook(comic: ComicBook): Observable<ComicBook[]> {
    return this.http.put<ComicBook[]>(
      `${environment.baseApiUrl}/${this.apiRoute}/${comic.id}`,
      comic
    );
  }

  public deleteComicBook(id: number): Observable<ComicBook[]> {
    return this.http.delete<ComicBook[]>(
      `${environment.baseApiUrl}/${this.apiRoute}/${id}`
    );
  }
}
