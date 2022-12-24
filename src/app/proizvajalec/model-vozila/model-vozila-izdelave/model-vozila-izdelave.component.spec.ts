import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelVozilaIzdelaveComponent } from './model-vozila-izdelave.component';

describe('ModelVozilaIzdelaveComponent', () => {
  let component: ModelVozilaIzdelaveComponent;
  let fixture: ComponentFixture<ModelVozilaIzdelaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelVozilaIzdelaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelVozilaIzdelaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
