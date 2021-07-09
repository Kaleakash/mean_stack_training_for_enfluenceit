import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { TdfLoginPageComponent } from './tdf-login-page/tdf-login-page.component';
import { MdfLoginPageComponent } from './mdf-login-page/mdf-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StructureDirectiveComponent,
    AboutUsComponent,
    ContactUsComponent,
    AttributeDirectiveComponent,
    TdfLoginPageComponent,
    MdfLoginPageComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
