import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { tableReducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TableEffects } from './store/effect';

@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ table: tableReducer }),
    EffectsModule.forRoot([TableEffects]),
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
