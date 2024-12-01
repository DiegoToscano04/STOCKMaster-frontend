import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBienvenidoComponent } from './user-bienvenido.component';

describe('UserBienvenidoComponent', () => {
  let component: UserBienvenidoComponent;
  let fixture: ComponentFixture<UserBienvenidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBienvenidoComponent]
    });
    fixture = TestBed.createComponent(UserBienvenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
