import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidaddComponent } from './kidadd.component';

describe('KidaddComponent', () => {
  let component: KidaddComponent;
  let fixture: ComponentFixture<KidaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
