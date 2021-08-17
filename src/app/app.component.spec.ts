import { AppModule } from './app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`#${AppComponent.prototype.like.name} should trigger liked() when called`, () => {
    appComponent.like();
    expect(appComponent.likes).toEqual(appComponent.likes);
  });
});
