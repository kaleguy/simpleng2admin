import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass']
})
export class TopnavComponent implements OnInit {

  public router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
