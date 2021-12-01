import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExemplosComponent } from './pipes-exemplos.component';

describe('PipesExemplosComponent', () => {
  let component: PipesExemplosComponent;
  let fixture: ComponentFixture<PipesExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExemplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
