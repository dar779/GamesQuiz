import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpartidaComponent } from './finalpartida.component';

describe('FinalpartidaComponent', () => {
  let component: FinalpartidaComponent;
  let fixture: ComponentFixture<FinalpartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinalpartidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalpartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
