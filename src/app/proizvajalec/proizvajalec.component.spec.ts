import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvajalecComponent } from './proizvajalec.component';

describe('ProizvajalecComponent', () => {
  let component: ProizvajalecComponent;
  let fixture: ComponentFixture<ProizvajalecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvajalecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvajalecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
