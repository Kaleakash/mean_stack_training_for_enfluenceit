import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllProjectDetailsComponent } from './all-project-details/all-project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreProjectDetailsComponent } from './store-project-details/store-project-details.component';
import { RetrieveProjectByIdComponent } from './retrieve-project-by-id/retrieve-project-by-id.component';
import { UpdateProjectDetailsComponent } from './update-project-details/update-project-details.component';
import { DeleteProjectByIdComponent } from './delete-project-by-id/delete-project-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllProjectDetailsComponent,
    StoreProjectDetailsComponent,
    RetrieveProjectByIdComponent,
    UpdateProjectDetailsComponent,
    DeleteProjectByIdComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
