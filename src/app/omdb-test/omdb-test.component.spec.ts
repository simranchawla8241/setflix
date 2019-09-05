import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmdbTestComponent } from './omdb-test.component';

describe('OmdbTestComponent', () => {
  let component: OmdbTestComponent;
  let fixture: ComponentFixture<OmdbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmdbTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmdbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
