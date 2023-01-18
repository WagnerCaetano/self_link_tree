import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScreenComponent } from 'src/screen/screen.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [		
    AppComponent,
    ScreenComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
