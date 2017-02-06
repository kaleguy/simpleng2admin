/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';
import {GlobalState} from '../global.state';

import { ContentHeaderComponent } from './content-header.component';

describe('ContentHeaderComponent', () => {
  let component: ContentHeaderComponent;
  let fixture: ComponentFixture<ContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule
      ],
      declarations: [ ContentHeaderComponent, MenuToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
