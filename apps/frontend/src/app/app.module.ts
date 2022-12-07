import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
