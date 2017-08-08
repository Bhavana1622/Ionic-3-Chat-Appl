import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../../pages/tabs/tabs";
import { RegisterPage } from "../../pages/register/register";

/**
 * Generated class for the LoginformComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'loginform',
  templateUrl: 'loginform.html'
})
export class LoginformComponent {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

 gotoHome(){
   this.navCtrl.setRoot(TabsPage);
 }
gotoSignup(){
  this.navCtrl.push(RegisterPage);
}
}
