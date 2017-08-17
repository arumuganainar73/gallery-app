import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LifestoryPage } from '../pages/lifestory/lifestory';
import { PhotosPage } from '../pages/photos/photos';
import { SharePage } from '../pages/share/share';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { BooksPage } from '../pages/books/books';
import { PoetryPage } from '../pages/poetry/poetry';
import { Firebase } from '@ionic-native/firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private ga: GoogleAnalytics, private oneSignal: OneSignal, private firebase: Firebase) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'QUOTES', component: ListPage },
      { title: 'LIFE STORY', component: LifestoryPage },
      { title: 'PHOTOS', component: PhotosPage },
      { title: 'POETRY', component: PoetryPage },
      { title: 'BOOKS', component: BooksPage },
      { title: 'SHARE', component: SharePage },
      { title: 'SUGGESTION', component: SuggestionPage }
    ];

    this.firebase.getToken()
      .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
      .catch(error => console.error('Error getting token', error));

    this.firebase.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // setTimeout(() => {
      this.splashScreen.hide();
      // }, 100);
      this.ga.startTrackerWithId('UA-103066870-1')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.trackView('APJ GALLERY');
          // Tracker is ready
          // You can now track pages or set additional information such as AppVersion or UserId
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));

      this.oneSignal.startInit('1dbde1b4-a1c0-46e5-b38e-117c630c0bd2', '783096741646');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((jsonData) => {
        console.log('I receive a notification: ' + JSON.stringify(jsonData));
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe((jsonData) => {
        console.log('I receive a notification: ' + JSON.stringify(jsonData));
        // do something when a notification is opened
      });

      this.oneSignal.endInit();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
