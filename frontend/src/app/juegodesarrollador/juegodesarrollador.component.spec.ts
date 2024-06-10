import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegodesarrolladorComponent } from './juegodesarrollador.component';

describe('JuegodesarrolladorComponent', () => {
  let component: JuegodesarrolladorComponent;
  let fixture: ComponentFixture<JuegodesarrolladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegodesarrolladorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegodesarrolladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
