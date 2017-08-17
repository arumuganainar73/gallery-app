import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LifestoryPage } from '../pages/lifestory/lifestory';
import { PhotosPage } from '../pages/photos/photos';
import { SharePage } from '../pages/share/share';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { BooksPage } from '../pages/books/books';
import { PoetryPage } from '../pages/poetry/poetry';
import { SinglePage } from '../pages/lifestory/singlepage';
import { ApjApi } from '../providers/apj-api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { OneSignal } from '@ionic-native/onesignal';
import { Firebase } from '@ionic-native/firebase';
import { FileOpener } from '@ionic-native/file-opener';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LifestoryPage,
    PhotosPage,
    SharePage,
    SuggestionPage,
    SinglePage,
    BooksPage,
    PoetryPage
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LifestoryPage,
    PhotosPage,
    SharePage,
    SuggestionPage,
    SinglePage,
    BooksPage,
    PoetryPage

  ],
  providers: [
    ApjApi,
    StatusBar,
    SplashScreen,
    EmailComposer,
    SocialSharing,
    PhotoViewer,
    InAppBrowser,
    GoogleAnalytics,
    OneSignal,
    Firebase,
    FileOpener,
    TextToSpeech,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
