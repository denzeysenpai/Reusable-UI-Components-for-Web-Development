import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernModalComponent } from './modern-modal.component';

describe('ModernModalComponent', () => {
  let component: ModernModalComponent;
  let fixture: ComponentFixture<ModernModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModernModalComponent]
    });
    fixture = TestBed.createComponent(ModernModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
