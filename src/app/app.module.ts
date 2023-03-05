import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScreenComponent } from 'src/app/screen/screen.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { GtagModule } from 'angular-gtag';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [				
    AppComponent,
    ScreenComponent,
      ModalComponent,
      DropdownComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbModalModule,
    MdbDropdownModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    GtagModule.forRoot({ trackingId: 'G-QZLZD3KM3E', trackPageviews: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
