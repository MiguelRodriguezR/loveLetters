import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LetterComponent} from './components/letter/letter.component';
import {AnimatedTextComponent} from "./components/animated-text/animated-text.component";
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AnimatedTextComponent,
    AppComponent,
    LetterComponent,
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
