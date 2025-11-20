import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Header } from './layout/header/header';
import { Home } from './layout/home/home';
import { Footer } from './layout/footer/footer';
import { Notfound } from './layout/notfound/notfound';
import { ListEvent } from './layout/list-event/list-event';
import { SharedModule } from './shared/shared-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Header, Home, Footer, Notfound, ListEvent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
