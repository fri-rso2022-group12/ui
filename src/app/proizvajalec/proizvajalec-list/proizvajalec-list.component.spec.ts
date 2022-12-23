import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvajalecListComponent } from './proizvajalec-list.component';

describe('ProizvajalecListComponent', () => {
  let component: ProizvajalecListComponent;
  let fixture: ComponentFixture<ProizvajalecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvajalecListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvajalecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
