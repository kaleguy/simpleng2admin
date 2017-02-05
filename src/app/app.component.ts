import { Component } from '@angular/core';
import { GlobalState } from './global.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  //title = 'app works!';
}
