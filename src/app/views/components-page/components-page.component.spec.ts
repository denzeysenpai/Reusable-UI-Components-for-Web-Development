import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPageComponent } from './components-page.component';

describe('ComponentsPageComponent', () => {
  let component: ComponentsPageComponent;
  let fixture: ComponentFixture<ComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
