import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuToggleComponent} from '../menu-toggle/menu-toggle.component';
import {GlobalState} from '../global.state';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.sass']
})
export class ContentHeaderComponent implements OnInit {

  public router:Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
