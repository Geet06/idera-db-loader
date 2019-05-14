import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IderaServerComponent } from './idera-server/idera-server.component';

const routes: Routes = [
  {path:'',component:IderaServerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
