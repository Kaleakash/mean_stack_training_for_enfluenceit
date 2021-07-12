import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFakeService } from './fake.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FakeComponent } from './fake/fake.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [MyFakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
