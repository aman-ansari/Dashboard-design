import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closenav(){
    $('.left_section').css('width', '0');
  }
}
