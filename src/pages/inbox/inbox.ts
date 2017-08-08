import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MSG_LIST } from "../../mocks/messages";
import { Message } from "../../models/messages/message.interface";

/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {
msgList:Message[] =MSG_LIST;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.msgList);
  }

}
