import { NgModule }      from '@angular/core';
import { MenuComponent }  from './menu.component/menu.component';
import { MenuItemComponent }  from './menu.component/menu.item.component/menu.item.component';
import { BrowserModule } from '@angular/platform-browser';
import { routing }       from '../core/app.router';

@NgModule({
    imports: [ BrowserModule, routing ],
    exports: [ MenuComponent, MenuItemComponent ],
    declarations: [ MenuComponent, MenuItemComponent ]
})
export class UiModule { }
