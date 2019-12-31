import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePostComponent } from './update-post/update-post.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegistrationComponent},
  {path:"home", component: HomeComponent},
  {path:"createPost", component: CreatePostComponent},
  {path:"singlePost/:id", component: SinglepostComponent},
  {path:"profile/:id", component: ProfileComponent},
  {path:"profileEdit/:id", component: UpdateProfileComponent},
  {path:"postEdit/:id", component: UpdatePostComponent },
  {path:"", component: LoginComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
