import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientClinica } from './client-clinica';

describe('ClientClinica', () => {
  let component: ClientClinica;
  let fixture: ComponentFixture<ClientClinica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientClinica],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientClinica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
