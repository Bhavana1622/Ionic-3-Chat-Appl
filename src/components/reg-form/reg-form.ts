import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InboxPage } from "../../pages/inbox/inbox";


/**
 * Generated class for the RegFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'reg-form',
  templateUrl: 'reg-form.html'
})
export class RegFormComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

gotoHome(){
  this.navCtrl.setRoot(InboxPage);
}
}
