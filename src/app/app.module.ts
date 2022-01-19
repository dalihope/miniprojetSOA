import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeacherService } from './services/teacher.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule, NgForm, NgModel } from '@angular/forms';

import { AppRoutingModule,routingComponent } from './app-routing.module';

import { PrintingAgentService } from './services/printing-agent.service';
import { PrintingOperationService } from './services/printing-operation.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 

  ],
  providers: [TeacherService,PrintingAgentService,PrintingOperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
