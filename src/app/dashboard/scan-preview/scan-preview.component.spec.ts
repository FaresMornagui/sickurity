import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanPreviewComponent } from './scan-preview.component';

describe('ScanPreviewComponent', () => {
  let component: ScanPreviewComponent;
  let fixture: ComponentFixture<ScanPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
