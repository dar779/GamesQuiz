import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoportadaComponent } from './juegoportada.component';

describe('JuegoportadaComponent', () => {
  let component: JuegoportadaComponent;
  let fixture: ComponentFixture<JuegoportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoportadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
