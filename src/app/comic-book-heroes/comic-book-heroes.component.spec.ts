import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBookHeroesComponent } from './comic-book-heroes.component';

describe('ComicBookHeroesComponent', () => {
  let component: ComicBookHeroesComponent;
  let fixture: ComponentFixture<ComicBookHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicBookHeroesComponent]
    });
    fixture = TestBed.createComponent(ComicBookHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
