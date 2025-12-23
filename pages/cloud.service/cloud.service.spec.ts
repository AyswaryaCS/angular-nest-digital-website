import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudService } from './cloud.service';

describe('CloudService', () => {
  let component: CloudService;
  let fixture: ComponentFixture<CloudService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
