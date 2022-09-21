import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { PdfInterfaceComponent } from './pdf-interface/pdf-interface.component';


const routes: Routes = [
  // { path: '', component: TestComponent },
  { path: 'test', component: TestComponent },
  { path: 'pdf-interface', component: PdfInterfaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
