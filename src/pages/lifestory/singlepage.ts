import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single',
  templateUrl: 'singlepage.html'
})
export class SinglePage {
  public flagName: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.flagName = params.get('flagName');
    console.log("flagName", this.flagName);
  }

}
