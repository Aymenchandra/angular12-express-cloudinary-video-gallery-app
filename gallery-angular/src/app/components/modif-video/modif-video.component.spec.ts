import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifVideoComponent } from './modif-video.component';

describe('ModifVideoComponent', () => {
  let component: ModifVideoComponent;
  let fixture: ComponentFixture<ModifVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
