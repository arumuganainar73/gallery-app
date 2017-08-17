import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  quotes: Array<{ id: number, imgUrl: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer:PhotoViewer) {


  this.quotes=[{
      id: 1,
      imgUrl: "assets/quotes/1.jpg"
    }, {
      id: 2,
      imgUrl: "assets/quotes/2.jpg"
    }, {
      id: 3,
      imgUrl: "assets/quotes/3.jpg"
    }, {
      id: 4,
      imgUrl: "assets/quotes/4.jpg"
    }, {
      id: 5,
      imgUrl: "assets/quotes/5.jpg"
    }, {
      id: 6,
      imgUrl: "assets/quotes/6.jpg"
    }, {
      id: 7,
      imgUrl: "assets/quotes/7.jpg"
    }, {
      id: 8,
      imgUrl: "assets/quotes/8.jpg"
    }, {
      id: 9,
      imgUrl: "assets/quotes/9.jpg"
    }, {
      id: 10,
      imgUrl: "assets/quotes/10.jpg"
    }, {
      id: 11,
      imgUrl: "assets/quotes/11.jpg"
    },{
      id: 12,
      imgUrl: "assets/quotes/12.jpg"
    },{
      id: 13,
      imgUrl: "assets/quotes/13.jpg"
    },{
      id: 14,
      imgUrl: "assets/quotes/14.jpg"
    },{
      id: 15,
      imgUrl: "assets/quotes/15.jpg"
    },{
      id: 16,
      imgUrl: "assets/quotes/16.jpg"
    },{
      id: 17,
      imgUrl: "assets/quotes/17.jpg"
    },{
      id: 18,
      imgUrl: "assets/quotes/18.jpg"
    },{
      id: 19,
      imgUrl: "assets/quotes/19.jpg"
    },{
      id: 20,
      imgUrl: "assets/quotes/20.jpg"
    },{
      id: 21,
      imgUrl: "assets/quotes/21.jpg"
    },{
      id: 22,
      imgUrl: "assets/quotes/22.jpg"
    },{
      id:23,
      imgUrl: "assets/quotes/23.jpg"
    },{
      id: 24,
      imgUrl: "assets/quotes/24.jpg"
    },{
      id: 25,
      imgUrl: "assets/quotes/25.jpg"
    },{
      id: 26,
      imgUrl: "assets/quotes/26.jpg"
    },{
      id: 27,
      imgUrl: "assets/quotes/27.jpg"
    },{
      id: 28,
      imgUrl: "assets/quotes/28.jpg"
    },{
      id: 29,
      imgUrl: "assets/quotes/29.jpg"
    },{
      id: 30,
      imgUrl: "assets/quotes/30.jpg"
    },{
      id: 31,
      imgUrl: "assets/quotes/31.jpg"
    },{
      id: 32,
      imgUrl: "assets/quotes/32.jpg"
    },{
      id: 33,
      imgUrl: "assets/quotes/33.jpg"
    },{
      id: 34,
      imgUrl: "assets/quotes/34.jpg"
    },{
      id: 35,
      imgUrl: "assets/quotes/35.jpg"
    },{
      id: 36,
      imgUrl: "assets/quotes/36.jpg"
    },{
      id: 37,
      imgUrl: "assets/quotes/37.jpg"
    },{
      id: 38,
      imgUrl: "assets/quotes/38.jpg"
    },{
      id: 39,
      imgUrl: "assets/quotes/39.jpg"
    },{
      id: 40,
      imgUrl: "assets/quotes/40.jpg"
    },{
      id: 41,
      imgUrl: "assets/quotes/41.jpg"
    },{
      id: 42,
      imgUrl: "assets/quotes/42.jpg"
    },{
      id: 43,
      imgUrl: "assets/quotes/43.jpg"
    },{
      id: 44,
      imgUrl: "assets/quotes/44.jpg"
    },{
      id: 45,
      imgUrl: "assets/quotes/45.jpg"
    },{
      id: 46,
      imgUrl: "assets/quotes/46.jpg"
    },{
      id: 47,
      imgUrl: "assets/quotes/47.jpg"
    },{
      id: 48,
      imgUrl: "assets/quotes/48.jpg"
    },{
      id: 49,
      imgUrl: "assets/quotes/49.jpg"
    },{
      id: 50,
      imgUrl: "assets/quotes/50.jpg"
    }];
  }
 openPhotoViwer(url){
   console.log("url", url);
   this.photoViewer.show('https://clubetc.scit.pt/wp-content/plugins/wp-support-plus-responsive-ticket-system/asset/images/close_btn.png', 'My image title', {share: false});

 }   
}
