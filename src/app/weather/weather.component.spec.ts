/* tslint:disable:no-unused-variable */
import {Injector} from '@angular/core';
import { async, fakeAsync, tick, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormControl,  ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Response, ResponseOptions, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let mockBackend: MockBackend;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ WeatherComponent ]
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

  xit('should retrieve the results for New York ', (callback) => {

    let component = fixture.componentInstance;
    component.getWeatherService('New York')
        .subscribe(
            res => {

              this.pending = false;
              expect(res.name).toEqual('New York');
              callback();

            },
            err => {
              console.log(err);
              expect(true).toEqual(false);
            },
            () => console.log(`Weather is retrieved`)
        );


    });

  xit('should display the results for New York ', (callback) => {

    let fixture = TestBed.createComponent(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.getWeather('New York', ()=>{
      fixture.detectChanges();
      expect(element.querySelector('#name').innerHTML).toBe('New York');
      callback();
    })

  });

  it('should display an error for city = koajfwe ', (callback) => {

    let fixture = TestBed.createComponent(WeatherComponent);
    let element = fixture.nativeElement;
    let component = fixture.componentInstance;
    component.getWeather('koajfwe', ()=>{
      fixture.detectChanges();
      expect(element.querySelector('#message').innerHTML).toContain('Not found');
      callback();
    })

  });

});
