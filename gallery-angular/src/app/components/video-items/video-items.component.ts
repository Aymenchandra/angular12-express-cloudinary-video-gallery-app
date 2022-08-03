import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { video } from 'src/app/_models/video';
import { VideoService } from 'src/app/_services/video/video.service';




@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.css']
})
export class VideoItemsComponent implements OnInit {
  @Input() video!:video;
  @Output() onDeleteComment:EventEmitter<video> = new EventEmitter();
  @Output() onUpdateComment:EventEmitter<video> = new EventEmitter();

  autoResize: boolean = true;
  popup: boolean = false;
  show:boolean = false;
  comment!:string
  items: any;
  constructor(private videoservice:VideoService) { }

  ngOnInit(): void {}

  //click to modify comment
  updateComment(video:video) {
      this.comment = video.comment!
      this.onUpdateComment.emit(video)
  }
  //click to delete comment
  deleteComment(video:video) {
      this.onDeleteComment.emit(video)
      this.comment = ''
  }
  //click to send feedback 
  AddComment(video:video)
  {
    video.comment = this.comment
    video.state = true;
    this.videoservice.updateComment(video).subscribe();
  }
  //show comment
  showFeedback()
  {
    this.show = !this.show
  }
}
