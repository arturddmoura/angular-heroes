import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBookCardsComponent } from './comic-book-cards.component';

describe('ComicBookCardsComponent', () => {
  let component: ComicBookCardsComponent;
  let fixture: ComponentFixture<ComicBookCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicBookCardsComponent],
    });
    fixture = TestBed.createComponent(ComicBookCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
