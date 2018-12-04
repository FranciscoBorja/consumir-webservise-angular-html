import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebahtmlComponent } from './pruebahtml.component';

describe('PruebahtmlComponent', () => {
  let component: PruebahtmlComponent;
  let fixture: ComponentFixture<PruebahtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebahtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebahtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
