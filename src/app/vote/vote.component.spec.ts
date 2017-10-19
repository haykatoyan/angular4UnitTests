import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*  
    beforeAll(() => {
        console.log('before all tests...');
    });

    afterAll(() => {
        console.log('after all tests...');
    });
  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment totalVotes when upVoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVoted', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
