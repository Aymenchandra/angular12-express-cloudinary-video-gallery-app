import { Component, OnInit } from '@angular/core';
import { video } from 'src/app/_models/video';
import { VideoService } from 'src/app/_services/video/video.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  videos !: video[]
  comment!:string
  constructor(private videoservice:VideoService) { }
  
  ngOnInit(): void {
    //show all videos
    this.getvideos()
  }
  //get all videos from db
  getvideos()
  {
    this.videoservice.getVideo().subscribe((video)=>(this.videos=video))
  }
  //delete comment as update service
  DeleteComment(video:video)
  {
    video.state = false
    video.comment = ""
    this.videoservice.updateComment(video).subscribe();
  }
  //modify comment as update service
  UpdateComment(video:video)
  {
    video.state = false
    this.videoservice.updateComment(video).subscribe();
  }

  


}
