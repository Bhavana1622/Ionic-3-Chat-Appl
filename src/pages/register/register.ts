import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InboxPage } from "../inbox/inbox";
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface'; 
import {ToastController} from 'ionic-angular';
import { Login } from "../../models/login/login.interface";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  acct = {} as Account
  constructor(private toast: ToastController ,public navCtrl: NavController, public navParams: NavParams,private auth:AngularFireAuth ) {
  }


async register(){

  try{
const result:Login = await this.auth.auth.createUserWithEmailAndPassword(this.acct.email,this.acct.password);
this.toast.create({
  message:"Account Created Successfully",
  duration: 3000
}).present();


}
catch(e){
this.toast.create({
  message:'error',
  duration: 3000
}).present();
}
}
}
