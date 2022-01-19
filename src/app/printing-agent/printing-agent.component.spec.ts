import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingAgentComponent } from './printing-agent.component';

describe('PrintingAgentComponent', () => {
  let component: PrintingAgentComponent;
  let fixture: ComponentFixture<PrintingAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
