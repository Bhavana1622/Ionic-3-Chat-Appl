import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {AngularFireAuth} from 'angularfire2/auth';
import { ComponentsModule } from "../../components/components.module";
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsModule,
    AngularFireAuth
  ],
})
export class RegisterPageModule {}
