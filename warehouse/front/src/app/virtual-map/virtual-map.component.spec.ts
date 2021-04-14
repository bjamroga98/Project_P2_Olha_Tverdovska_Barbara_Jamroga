import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMapComponent } from './virtual-map.component';

describe('VirtualMapComponent', () => {
  let component: VirtualMapComponent;
  let fixture: ComponentFixture<VirtualMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
