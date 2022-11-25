import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isChecked = false;
  isShow: boolean;
  topPosToStartShowing = 100;

  constructor() {
    
   }

  ngOnInit(): void {
    if (localStorage.getItem("Theme") === "dark") {
      this.isChecked = true;
    }
    this.getThemePreference();
  }

  checkSwitch() { 
    if (this.isChecked === false) {
      document.body.classList.add('dark-theme');
      localStorage.setItem("Theme", "dark");
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem("Theme", "light");
    }
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
