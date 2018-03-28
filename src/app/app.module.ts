import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagedrawModule } from '../pagedraw/pagedraw.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagedrawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
