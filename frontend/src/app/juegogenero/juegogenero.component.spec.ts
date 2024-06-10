import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegogeneroComponent } from './juegogenero.component';

describe('JuegogeneroComponent', () => {
  let component: JuegogeneroComponent;
  let fixture: ComponentFixture<JuegogeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegogeneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegogeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
