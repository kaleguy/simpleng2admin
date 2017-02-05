import { Component, OnInit } from '@angular/core';
import { FormControl,  ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import * as moment from 'moment/moment';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  private baseWeatherURL: string= 'http://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix: string = ",US&units=imperial&appid=c478bded4945b00879ff8199ec9aed58";

  reportHidden: boolean = true;
  pending: boolean = false;

  report: any = {
    main: '',
    weather: [{main:''}],
    coord: {dt:''},
    sys: ''
  };

  constructor(private http:Http){
  }

  getWeather(city: string) {

    this.pending = true;
    this.reportHidden = true;

    this.http.get(this.baseWeatherURL + city + this.urlSuffix)
        .map(res => {
          console.log(res);
          return res.json()}
        )
        .delay(1500)
        .subscribe(
            res => {

              this.pending = false;

              if (res['cod'] === '404') return;

              if (!res.main) {
                this.report.message ='City is not found.';
              } else {
                this.reportHidden = false;
                this.report = res;
                console.log("Weather Report: ", this.report);
              }
            },
            err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
            () => console.log(`Weather is retrieved`)
        );

  }


  ngOnInit(){}


}
