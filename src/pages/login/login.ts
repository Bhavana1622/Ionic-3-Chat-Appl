import { Component , EventEmitter, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { RegisterPage } from "../register/register";
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface'; 
import {ToastController} from 'ionic-angular';
import { Login } from "../../models/login/login.interface";
import { EditProfilePage } from "../edit-profile/edit-profile";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  acct = {} as Account;
  @Output() loginStatus: EventEmitter<Login>;
  

  constructor(private toast: ToastController ,public navCtrl: NavController, 
    public navParams: NavParams,private auth: AngularFireAuth) { 
      this.loginStatus = new EventEmitter<Login>();
     }

 gotoHome(){
   this.navCtrl.setRoot(TabsPage);
 }
gotoSignup(){
  this.navCtrl.push(RegisterPage);
}


async login(){
  try{
const result:Login={
result:  await this.auth.auth.signInWithEmailAndPassword(this.acct.email,this.acct.password)
} 
this.loginStatus.emit(result);
this.navCtrl.setRoot(EditProfilePage);
this.toast.create({
  message:`Welcome ${this.acct.email}`,
  duration: 3000
}).present();

  }catch(e){
const error: Login={
error: e
} 
this.loginStatus.emit(error);
this.toast.create({
  message:'error',
  duration: 3000
}).present();

  }
}
}
