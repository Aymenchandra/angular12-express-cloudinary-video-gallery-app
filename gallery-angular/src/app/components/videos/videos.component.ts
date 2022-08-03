import { Component, OnInit } from '@angular/core';
import { video } from 'src/app/_models/video';
import { VideoService } from 'src/app/_services/video/video.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos !: video[]
  comment!:string

  displayedColumns: string[] = ['title', 'description', 'source' ,'actions'];

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

  delete(id:any)
  {
    console.log(id)
    this.videoservice.DeleteVideo(id).subscribe((res)=>{
      this.getvideos()
    })
  }
}
