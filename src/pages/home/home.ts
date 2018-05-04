import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuData= [
    { title: 'Our Menu', pic: 'assets/imgs/1.jpg', pushPage: 'MenuPage' },
    { title: 'Account', pic: 'assets/imgs/1.jpg', pushPage: 'AccountPage' },
    { title: 'About Us', pic: 'assets/imgs/1.jpg', pushPage: 'AboutPage' },
    { title: 'Locations', pic: 'assets/imgs/1.jpg', pushPage: 'LocationsPage' },
  ]

  constructor(public navCtrl: NavController) {

  }

}
