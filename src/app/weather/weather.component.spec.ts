/* tslint:disable:no-unused-variable */
import {Injector} from '@angular/core';
import { async, fakeAsync, tick, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormControl,  ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Response, ResponseOptions, BaseRequestOptions, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ WeatherComponent ],
      providers: [
      ]
    })
    .compileComponents();
    injector = getTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the results for New York ', (done) => {

    let component = fixture.componentInstance;
    component.getWeatherService('New York', 0)
        .subscribe(
            res => {
              expect(res.name).toEqual('New York');
              done();
            },
            err => {
              console.log(err);
              expect(true).toEqual(false);
              done();
            },
            () => console.log(`Weather is retrieved`)
        );
    });

  xit('should display the results for New York ', (done) => {

    let fixture = TestBed.createComponent(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.getWeather('New York', 0, ()=>{
      fixture.detectChanges();
      expect(element.querySelector('#name').innerHTML).toBe('New York');
      done();
    })

  });

  xit('should display an error for city = koajfwe ', (done) => {

    let fixture = TestBed.createComponent(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.getWeather('koajfwe', 0, ()=>{
      fixture.detectChanges();
      expect(element.querySelector('#message').innerHTML).toContain('Not found');
      done();
    })

  });

});


describe('WeatherComponent with Mocks', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let mockBackend: MockBackend;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [
            HttpModule
          ],
          declarations: [ WeatherComponent ],
          providers: [
            MockBackend,
            BaseRequestOptions,
            {
              provide: Http,
              useFactory: (backend, options) => new Http(backend, options),
              deps: [MockBackend, BaseRequestOptions]
            }
          ]
        })
        .compileComponents();
    injector = getTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    mockBackend = injector.get(XHRBackend);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Weather Service Mocks', () => {
    const mockResponse = {
      city: 'foo'
    };

    it('should parse response', async(inject(
        [MockBackend], (mockBackend) => {

          mockBackend.connections.subscribe(conn => {
            conn.mockRespond(
                new Response(new ResponseOptions({ body: JSON.stringify(mockResponse) }))
            );
          });

          let fixture = TestBed.createComponent(WeatherComponent);
          //let element = fixture.nativeElement;
          let component = fixture.componentInstance;
          component.getWeatherService('New York', 0)
              .subscribe(
                  res => {
                    expect(res).toEqual({
                      city: 'foo'
                    });
                  },
                  err => {
                    console.log(err);
                  },
                  x => console.log("WS test complete")

              );

          //component.get

        })));
  });


});

