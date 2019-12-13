import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TranslocoModule, translocoConfig, TRANSLOCO_CONFIG } from '@ngneat/transloco'

import {KeyFilterModule} from 'primeng/keyfilter';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { StoryListComponent } from './story-list/story-list.component';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco-loader';
;

@NgModule({
  declarations: [
    AppComponent,
    StoryListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    KeyFilterModule,
    TranslocoModule, 
    HttpClientModule
  ],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }