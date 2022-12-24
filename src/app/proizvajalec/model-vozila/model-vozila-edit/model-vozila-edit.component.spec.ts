import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVozilaEditComponent } from './model-vozila-edit.component';

describe('ModelVozilaEditComponent', () => {
  let component: ModelVozilaEditComponent;
  let fixture: ComponentFixture<ModelVozilaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVozilaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVozilaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
