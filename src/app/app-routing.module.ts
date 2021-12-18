import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentContainerComponent } from './components/layout/main-content-container/main-content-container.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
