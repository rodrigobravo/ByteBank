import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransferenciaComponent } from './nova-transferencia.component';

describe('NovaTransferenciaComponent', () => {
  let component: NovaTransferenciaComponent;
  let fixture: ComponentFixture<NovaTransferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaTransferenciaComponent]
    });
    fixture = TestBed.createComponent(NovaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
