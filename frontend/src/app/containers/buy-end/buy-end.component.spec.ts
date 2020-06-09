import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEndComponent } from './buy-end.component';

describe('BuyEndComponent', () => {
  let component: BuyEndComponent;
  let fixture: ComponentFixture<BuyEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
