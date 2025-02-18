import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPostsComponent } from './medium-posts.component';

describe('MediumPostsComponent', () => {
  let component: MediumPostsComponent;
  let fixture: ComponentFixture<MediumPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
