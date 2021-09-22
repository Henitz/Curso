import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoOneComponent } from './pedido-one.component';

describe('PedidoOneComponent', () => {
  let component: PedidoOneComponent;
  let fixture: ComponentFixture<PedidoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
