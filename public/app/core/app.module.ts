import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing }       from './app.router';
import { LayoutModule }  from '../layout/layout.module';
import { UiModule }      from '../ui/ui.module';

@NgModule({
  imports: [
      BrowserModule,
      routing,
      LayoutModule,
      UiModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
