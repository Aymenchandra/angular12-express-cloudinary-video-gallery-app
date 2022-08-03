import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutVideoComponent } from './components/ajout-video/ajout-video.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ModifVideoComponent } from './components/modif-video/modif-video.component';
import { VideosComponent } from './components/videos/videos.component';



const routes: Routes = [
  {path:"gallery",component:GalleryComponent},
  {path:"videos",component:VideosComponent},
  {path:"add",component:AjoutVideoComponent},
  {path:"modif/:id",component:ModifVideoComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
