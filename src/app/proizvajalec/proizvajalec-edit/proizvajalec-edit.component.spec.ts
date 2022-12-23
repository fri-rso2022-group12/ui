import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvajalecEditComponent } from './proizvajalec-edit.component';

describe('ProizvajalecEditComponent', () => {
  let component: ProizvajalecEditComponent;
  let fixture: ComponentFixture<ProizvajalecEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvajalecEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvajalecEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
