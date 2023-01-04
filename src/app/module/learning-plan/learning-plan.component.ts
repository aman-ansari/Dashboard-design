import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-learning-plan',
  templateUrl: './learning-plan.component.html',
  styleUrls: ['./learning-plan.component.scss']
})
export class LearningPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav(){
    $('.left_section').css('width', '50%');
  }
}
