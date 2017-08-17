import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeImages: Array<{ id: number, imgUrl: string }>;
  constructor(public navCtrl: NavController, private tts: TextToSpeech) {
    this.homeImages = [{
      id: 1,
      imgUrl: "assets/homeImg/kalam-quote-01.jpg"
    }, {
      id: 2,
      imgUrl: "assets/homeImg/kalam-quote-02.jpg"
    }, {
      id: 3,
      imgUrl: "assets/homeImg/kalam-quote-03.jpg"
    }, {
      id: 4,
      imgUrl: "assets/homeImg/kalam-quote-04.jpg"
    }, {
      id: 5,
      imgUrl: "assets/homeImg/kalam-quote-05.jpg"
    }, {
      id: 6,
      imgUrl: "assets/homeImg/kalam-quote-06.jpg"
    }, {
      id: 7,
      imgUrl: "assets/homeImg/kalam-quote-07.jpg"
    }, {
      id: 8,
      imgUrl: "assets/homeImg/kalam-quote-08.jpg"
    }, {
      id: 9,
      imgUrl: "assets/homeImg/kalam-quote-09.jpg"
    }, {
      id: 10,
      imgUrl: "assets/homeImg/kalam-quote-10.jpg"
    }, {
      id: 11,
      imgUrl: "assets/homeImg/kalam-quote-11.jpg"
    }, {
      id: 12,
      imgUrl: "assets/homeImg/kalam-quote-12.jpg"
    }, {
      id: 13,
      imgUrl: "assets/homeImg/kalam-quote-13.jpg"
    }, {
      id: 14,
      imgUrl: "assets/homeImg/kalam-quote-14.jpg"
    }, {
      id: 15,
      imgUrl: "assets/homeImg/kalam-quote-15.jpg"
    }, {
      id: 16,
      imgUrl: "assets/homeImg/kalam-quote-16.jpg"
    }, {
      id: 17,
      imgUrl: "assets/homeImg/kalam-quote-17.jpg"
    }, {
      id: 18,
      imgUrl: "assets/homeImg/kalam-quote-18.jpg"
    }];//, {
    //   id: 19,
    //   imgUrl: "assets/homeImg/kalam-quote-19.jpg"
    // }, {
    //   id: 20,
    //   imgUrl: "assets/homeImg/kalam-quote-20.jpg"
    // }, {
    //   id: 21,
    //   imgUrl: "assets/homeImg/kalam-quote-21.jpg"
    // }, {
    //   id: 22,
    //   imgUrl: "assets/homeImg/kalam-quote-22.jpg"
    // }, {
    //   id: 23,
    //   imgUrl: "assets/homeImg/kalam-quote-23.jpg"
    // }, {
    //   id: 24,
    //   imgUrl: "assets/homeImg/kalam-quote-24.jpg"
    // }, {
    //   id: 25,
    //   imgUrl: "assets/homeImg/kalam-quote-25.jpg"
    // }, {
    //   id: 26,
    //   imgUrl: "assets/homeImg/kalam-quote-26.jpg"
    // }];

  }
  playTextToSpeech() {
    console.log('Start')
    this.tts.speak('dinesh is a playboy')
      .then(() =>
        console.log('Success')
      ).catch((reason: any) => console.log(reason));

    //this.showRecordingSection = true;
  }
  // async playTextToSpeech(): Promise<any> {
  //   try {
  //     await this.tts.speak('Hello World').then(() =>
  //       console.log('Success'));

  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

}
