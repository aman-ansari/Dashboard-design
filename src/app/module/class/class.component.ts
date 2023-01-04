import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav(){
    $('.left_section').css('width', '50%');
  }
}
