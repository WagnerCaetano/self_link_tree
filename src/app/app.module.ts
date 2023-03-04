import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScreenComponent } from 'src/app/screen/screen.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { GtagModule } from 'angular-gtag';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [			
    AppComponent,
    ScreenComponent,
      ModalComponent
   ],
  imports: [
    BrowserModule,
    MdbModalModule,
    GtagModule.forRoot({ trackingId: 'G-QZLZD3KM3E', trackPageviews: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
