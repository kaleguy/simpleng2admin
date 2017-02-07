/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalState } from "./global.state";
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { ContentHeaderComponent } from './content-header/content-header.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ContentHeaderComponent,
        SidebarComponent,
        TopnavComponent,
        MenuToggleComponent
      ],
      providers: [
          GlobalState
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

/*  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/
});
