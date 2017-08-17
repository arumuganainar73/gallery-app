import { MetadataOverride } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html'
})
export class SuggestionPage {

  data = {
    name: '',
    email: '',
    number: '',
    description: ''
  }
  constructor(public nav: NavController, public emailComposer: EmailComposer) {

  }
  sendFeedBack() {

    let email = {
      to: 'arumuganainar73@gmail.com',
      subject: this.data.name,
      body: this.data.number + '<br>' + this.data.email + '<br>' + this.data.description,
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);

  };




}
