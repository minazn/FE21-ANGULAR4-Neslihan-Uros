import { Component, OnInit } from '@angular/core';
import { NavtestService } from '../navtest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  test : boolean = false;
  constructor(private showImg: NavtestService) { }

  ngOnInit(): void {
    this.showImg.translate.subscribe((show)=>{
      this.test = show;
    }
    )
  }

}
