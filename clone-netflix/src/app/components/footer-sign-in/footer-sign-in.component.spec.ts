import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSignInComponent } from './footer-sign-in.component';

describe('FooterSignInComponent', () => {
  let component: FooterSignInComponent;
  let fixture: ComponentFixture<FooterSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
