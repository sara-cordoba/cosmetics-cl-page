import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairComponent } from './hair.component';

describe('HairComponent', () => {
  let component: HairComponent;
  let fixture: ComponentFixture<HairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
