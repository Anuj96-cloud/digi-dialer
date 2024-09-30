import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilterDialogComponent } from './add-filter-dialog.component';

describe('AddFilterDialogComponent', () => {
  let component: AddFilterDialogComponent;
  let fixture: ComponentFixture<AddFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFilterDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});