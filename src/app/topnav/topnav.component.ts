import { Component, OnInit } from '@angular/core';
import {GlobalState} from '../global.state';
import {Router} from '@angular/router'

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.sass']
})
export class TopnavComponent implements OnInit {

  public isMenuCollapsed:boolean = false;
  public router:Router;

  constructor(private _state:GlobalState, private _router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this.router = _router;
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  ngOnInit() {
  }

}
