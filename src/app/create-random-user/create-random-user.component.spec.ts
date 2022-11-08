import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRandomUserComponent } from './create-random-user.component';

describe('CreateRandomUserComponent', () => {
  let component: CreateRandomUserComponent;
  let fixture: ComponentFixture<CreateRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
