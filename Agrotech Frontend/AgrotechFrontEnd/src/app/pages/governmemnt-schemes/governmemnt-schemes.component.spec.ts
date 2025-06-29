import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentSchemesComponent } from './governmemnt-schemes.component';

describe('GovernmemntSchemesComponent', () => {
  let component: GovernmentSchemesComponent;
  let fixture: ComponentFixture<GovernmentSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentSchemesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GovernmentSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
