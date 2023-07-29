import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Hero } from '../models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private apiRoute = 'heroes';

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.baseApiUrl}/${this.apiRoute}`);
  }
}
