import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IderaServerComponent } from './idera-server/idera-server.component';
import { ReadmeComponent } from './readme/readme.component';

const routes: Routes = [
  {path:'',component:IderaServerComponent},
  {path:'SWA',component:IderaServerComponent},
  {path:'readme',component:ReadmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
