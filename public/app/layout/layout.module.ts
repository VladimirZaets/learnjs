import { NgModule }      from '@angular/core';
import { HeaderComponent }  from './header.component/header.component';
import { AuthorizationPageComponent }  from './authorization.page.component/authorization.page.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../ui/ui.module';


@NgModule({
    imports: [ BrowserModule, UiModule ],
    exports: [ HeaderComponent, AuthorizationPageComponent ],
    declarations: [ HeaderComponent, AuthorizationPageComponent ]
})
export class LayoutModule { }
