import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingOperationComponent } from './printing-operation.component';

describe('PrintingOperationComponent', () => {
  let component: PrintingOperationComponent;
  let fixture: ComponentFixture<PrintingOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
