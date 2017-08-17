import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SinglePage } from './singlepage';


@Component({
  selector: 'page-lifestory',
  templateUrl: 'lifestory.html'
})
export class LifestoryPage {

  constructor(public navCtrl: NavController) {

  }

  navigation(flag) {
    console.log("flag", flag);
    this.navCtrl.push(SinglePage, {
      flagName: flag

    })
  }

}