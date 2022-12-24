import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVozilaListComponent } from './model-vozila-list.component';

describe('ModelVozilaListComponent', () => {
  let component: ModelVozilaListComponent;
  let fixture: ComponentFixture<ModelVozilaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVozilaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVozilaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
