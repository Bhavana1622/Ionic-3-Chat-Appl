import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/user/user.interface";
import {AngularFireAuth} from 'angularfire2/auth';
import { DataserviceProvider } from "../../providers/dataservice/dataservice";
import { User } from "firebase/app";
import { Subscription } from "rxjs/Subscription";
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
user= {} as Profile;
private getUser$ :Subscription;
private authUser: User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AngularFireAuth,private data: DataserviceProvider) {
    this.getUser$ = this.auth.authState.subscribe((user:User)=> {
this.authUser = user;

    });
  }




 async save(){
   if(this.getUser$){
     this.user.email = this.authUser.email;
const res= this.data.saveprofile(this.authUser,this.user);
console.log(res);
   }

 }

}
