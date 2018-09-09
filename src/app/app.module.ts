import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
//import { Database } from 'sqlite3';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignedNumberPipe } from './signed-number.pipe';

@NgModule({

  declarations: [
    AppComponent,
    MainComponent,
    SignedNumberPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //Database
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
