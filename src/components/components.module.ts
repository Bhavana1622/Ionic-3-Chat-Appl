import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { LoginformComponent } from './loginform/loginform';
import { RegFormComponent } from './reg-form/reg-form';

@NgModule({
    declarations:[LoginformComponent,
    RegFormComponent],
    imports:[IonicModule],
    exports:[LoginformComponent,
    RegFormComponent]
})
export class ComponentsModule{

}