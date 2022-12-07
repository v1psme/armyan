import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NxWelcomeComponent} from "../nx-welcome.component";
import {TestComponent} from "../test/test.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot([
      {
        path: "welcome",
        component: NxWelcomeComponent
      },
      {
        path: "welcome2",
        component: TestComponent
      }
    ])
  ]
})
export class AppRoutingModule {}
