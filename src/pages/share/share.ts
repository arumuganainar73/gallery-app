import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-share',
  templateUrl: 'share.html'
})
export class SharePage {

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }
  shareMyApp() {
    this.socialSharing.share("DR.APJ ABDUL KALAM", "APJ GALLERY", null, null)
    .then((success) => {
    console.log("share success", success);
    })
    .catch((error) => {
    console.log("share error", error);
    });
  }

}
