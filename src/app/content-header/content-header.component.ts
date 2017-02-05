import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.sass']
})
export class ContentHeaderComponent implements OnInit {
  public isMenuCollapsed:boolean = false;

  public router:Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
