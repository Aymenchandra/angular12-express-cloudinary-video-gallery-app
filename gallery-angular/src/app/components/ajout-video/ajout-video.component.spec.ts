import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutVideoComponent } from './ajout-video.component';

describe('AjoutVideoComponent', () => {
  let component: AjoutVideoComponent;
  let fixture: ComponentFixture<AjoutVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
