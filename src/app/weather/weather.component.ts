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

    private baseWeatherURL:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix:string = "&units=imperial&appid=c478bded4945b00879ff8199ec9aed58";

    reportHidden:boolean = true;
    pending:boolean = false;

    report:any = {
        main: '',
        weather: [{main: ''}],
        coord: {dt: ''},
        sys: '',
        message: {
            cod: '',
            message: ''
        }
    };

    constructor(private http:Http) {
    }

    public getWeatherService(city:string, delay:number) {

        this.pending = true;
        this.report.message = '';
        this.reportHidden = true;

        let ob =  this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map(res => {
                    console.log(res);
                    return res.json()
                }
            );

        if (delay){
            return ob.delay(delay);
        } else {
            return ob;
        }

    }

    public getWeather(city:string, delay, cb){
       // callback for testing
       if (! cb){
           cb = ()=>{}
       }

       this.getWeatherService(city, delay)
           .subscribe(
            res => {
                this.pending = false;
                this.reportHidden = false;
                this.report = res;
                this.report.message = {};
                cb();
            },
            err => {
                try {
                    this.report.message = JSON.parse(err._body);
                    this.report.message.status = err.status;
                } catch(e){
                    this.report.message = "Unknown Error."
                }
                this.pending = false;
                cb();
            },
            () => {
                console.log(`Weather is retrieved`);
                cb();
            }
        )
    }

    ngOnInit() {
    }


}
