import { Component, OnInit } from '@angular/core';
import { NavtestService } from '../navtest.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private showImg: NavtestService) { }

  ngOnInit(): void {
    this.showImg.translate.next(true);
  }

}
