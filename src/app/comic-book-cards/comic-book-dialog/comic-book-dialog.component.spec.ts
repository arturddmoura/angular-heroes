import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBookDialogComponent } from './comic-book-dialog.component';

describe('ComicBookDialogComponent', () => {
  let component: ComicBookDialogComponent;
  let fixture: ComponentFixture<ComicBookDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicBookDialogComponent]
    });
    fixture = TestBed.createComponent(ComicBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
