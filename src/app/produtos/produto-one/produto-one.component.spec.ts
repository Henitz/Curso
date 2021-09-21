import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoOneComponent } from './produto-one.component';

describe('ProdutoOneComponent', () => {
  let component: ProdutoOneComponent;
  let fixture: ComponentFixture<ProdutoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
