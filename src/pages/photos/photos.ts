import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotoViewer } from '@ionic-native/photo-viewer';


@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage {
  photos: Array<{ id: number, imgUrl: string }>;
  constructor(public navCtrl: NavController, private photoViewer:PhotoViewer) {


    this.photos = [{
      id: 1,
      imgUrl: "assets/photos/1.jpg"
    }, {
      id: 2,
      imgUrl: "assets/photos/2.jpg"
    }, {
      id: 3,
      imgUrl: "assets/photos/3.jpg"
    }, {
      id: 4,
      imgUrl: "assets/photos/4.jpg"
    }, {
      id: 5,
      imgUrl: "assets/photos/5.jpg"
    }, {
      id: 6,
      imgUrl: "assets/photos/6.jpg"
    }, {
      id: 7,
      imgUrl: "assets/photos/7.jpg"
    }, {
      id: 8,
      imgUrl: "assets/photos/8.jpg"
    }, {
      id: 9,
      imgUrl: "assets/photos/9.jpg"
    }, {
      id: 10,
      imgUrl: "assets/photos/10.jpg"
    }, {
      id: 11,
      imgUrl: "assets/photos/11.jpg"
    },{
      id: 12,
      imgUrl: "assets/photos/12.jpg"
    },{
      id: 13,
      imgUrl: "assets/photos/13.jpg"
    },{
      id: 14,
      imgUrl: "assets/photos/14.jpg"
    },{
      id: 15,
      imgUrl: "assets/photos/15.jpg"
    },{
      id: 16,
      imgUrl: "assets/photos/16.jpg"
    },{
      id: 17,
      imgUrl: "assets/photos/17.jpg"
    },{
      id: 18,
      imgUrl: "assets/photos/18.jpg"
    },{
      id: 19,
      imgUrl: "assets/photos/19.jpg"
    },{
      id: 20,
      imgUrl: "assets/photos/20.jpg"
    },{
      id: 21,
      imgUrl: "assets/photos/21.jpg"
    },{
      id: 22,
      imgUrl: "assets/photos/22.jpg"
    },{
      id:23,
      imgUrl: "assets/photos/23.jpg"
    },{
      id: 24,
      imgUrl: "assets/photos/24.jpg"
    },{
      id: 25,
      imgUrl: "assets/photos/25.jpg"
    },{
      id: 26,
      imgUrl: "assets/photos/26.jpg"
    },{
      id: 27,
      imgUrl: "assets/photos/27.jpg"
    },{
      id: 28,
      imgUrl: "assets/photos/28.jpg"
    },{
      id: 29,
      imgUrl: "assets/photos/29.jpg"
    },{
      id: 30,
      imgUrl: "assets/photos/30.jpg"
    },{
      id: 31,
      imgUrl: "assets/photos/31.jpg"
    },{
      id: 32,
      imgUrl: "assets/photos/32.jpg"
    },{
      id: 33,
      imgUrl: "assets/photos/33.jpg"
    },{
      id: 34,
      imgUrl: "assets/photos/34.jpg"
    },{
      id: 35,
      imgUrl: "assets/photos/35.jpg"
    },{
      id: 36,
      imgUrl: "assets/photos/36.jpg"
    },{
      id: 37,
      imgUrl: "assets/photos/37.jpg"
    },{
      id: 38,
      imgUrl: "assets/photos/38.jpg"
    },{
      id: 39,
      imgUrl: "assets/photos/39.jpg"
    },{
      id: 40,
      imgUrl: "assets/photos/40.jpg"
    }];
  }
  openPhotoViwer(url) {
    console.log("url", url);
    this.photoViewer.show(url);

  }
}
