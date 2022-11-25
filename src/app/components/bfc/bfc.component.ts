import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-bfc',
  templateUrl: './bfc.component.html',
  styleUrls: ['./bfc.component.scss']
})
export class BfcComponent implements OnInit {

  isShow: boolean;
  topPosToStartShowing = 100;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.getThemePreference();
  }

  back(): void {
    this.location.back();
  }

  preference: any;
  getThemePreference() {
    this.preference = localStorage.getItem("Theme");
    if (this.preference === "dark") {
      console.log("Theme is dark")
      document.body.classList.add('dark-theme');
    }
  }

  @HostListener('window:scroll')
  checkScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
