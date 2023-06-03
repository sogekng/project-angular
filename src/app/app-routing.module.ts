import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: {pageTitle: "home"}
  },
  {
    path: "",
    redirectTo: '/home',
    pathMatch: "full"
  },
  { path: 'home/edit/:id',
    component: UsersEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
