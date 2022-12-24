import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloListComponent } from './vozilo-list.component';

describe('VoziloListComponent', () => {
  let component: VoziloListComponent;
  let fixture: ComponentFixture<VoziloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoziloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
