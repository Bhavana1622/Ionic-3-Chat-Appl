import { Injectable } from '@angular/core';

import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import { User } from "firebase/app";
import { Profile } from "../../models/user/user.interface";
import 'rxjs/add/operator/take';



@Injectable()
export class DataserviceProvider {


  profileObject : FirebaseObjectObservable<Profile>;
  constructor(private database: AngularFireDatabase) {
    console.log('Hello DataserviceProvider Provider');
  }

 async  saveprofile(edituser: User,User : Profile){
this.profileObject = this.database.object(`/users/${edituser.uid}`);
try{
  this.profileObject.set(User);
  return true;

}catch(e){
console.log(e);
return false;
}

  }




  getProfile(user: User){
this.profileObject = this.database.object(`/users/${user.uid}`);
return  this.profileObject.take(1); //return data for only one user
  }

}
