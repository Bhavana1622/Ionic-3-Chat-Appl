import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { TabsPage } from "../pages/tabs/tabs";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireAuth } from "angularfire2/auth";
import { EditProfilePage } from "../pages/edit-profile/edit-profile";
import { DataserviceProvider } from '../providers/dataservice/dataservice';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    TabsPage,
    EditProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    RegisterPage,
    EditProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataserviceProvider
  ]
})
export class AppModule {}
