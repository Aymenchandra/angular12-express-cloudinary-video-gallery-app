import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {CardModule} from 'primeng/card';

import { AjoutVideoComponent } from './components/ajout-video/ajout-video.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ModifVideoComponent } from './components/modif-video/modif-video.component';
import { VideoItemsComponent } from './components/video-items/video-items.component';
import { VideosComponent } from './components/videos/videos.component';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MatTableModule} from '@angular/material/table';

import {ProgressBarModule} from 'primeng/progressbar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjoutVideoComponent,
    GalleryComponent,
    ModifVideoComponent,
    VideoItemsComponent,
    VideosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatBadgeModule,
    TableModule,
    ButtonModule,
    CardModule,
    MatToolbarModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    PanelModule,
    MenuModule,
    InputTextareaModule,
    MatTableModule,
    ProgressBarModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
