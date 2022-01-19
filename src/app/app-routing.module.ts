import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { PrintingAgentComponent } from './printing-agent/printing-agent.component';
import { PrintingOperationComponent } from './printing-operation/printing-operation.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path:'printing-agent',
    component: PrintingAgentComponent,
  },
  {
    path:'printing-operation',
    component: PrintingOperationComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[PrintingAgentComponent,TeacherComponent,PrintingOperationComponent] 
