import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IderaServerComponent } from './idera-server.component';

describe('IderaServerComponent', () => {
  let component: IderaServerComponent;
  let fixture: ComponentFixture<IderaServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IderaServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IderaServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
