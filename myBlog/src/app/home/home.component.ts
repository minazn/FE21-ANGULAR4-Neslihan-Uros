import { Component, OnInit } from '@angular/core';
import { NavtestService } from '../navtest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private showImg:NavtestService) { }

  ngOnInit(): void {
    this.showImg.translate.next(false);
  }

}
