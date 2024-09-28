import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadvideoService } from 'src/app/_services/uploadvideo/uploadvideo.service';
import { VideoService } from 'src/app/_services/video/video.service';


@Component({
  selector: 'app-modif-video',
  templateUrl: './modif-video.component.html',
  styleUrls: ['./modif-video.component.css']
})
export class ModifVideoComponent implements OnInit {

  form: any = {
    title: null,
    description: null,
    source: null,
    
  };
  selectedfile: any = null;
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private _uploadService: UploadvideoService,
    private serviceVideo: VideoService,
    private router : ActivatedRoute,
    ) { }

   
  ngOnInit(): void {
    this.getvideo()
  }

  onFileSelected(e:any){
    this.selectedfile = e.target.files[0]
  }

  getvideo(){
    this.serviceVideo.getOneVideo(this.router.snapshot.params.id).subscribe(res=>{
      this.form.title = res.title;
      this.form.description = res.description;
      this.form.source = res.source;
    })
  }
  onSubmit(): void {
    if(!this.selectedfile){
      this.serviceVideo.UpdateVideo(this.router.snapshot.params.id,this.form).subscribe(()=>{
        this.isSuccessful = true
      })
    }
    else{
      const data = new FormData();
      data.append('file', this.selectedfile);
      data.append('upload_preset', 'lkffra40');
      data.append('cloud_name', 'dcscoeeoo');

      this._uploadService.uploadImage(data).subscribe((response) => {
        if (response) {
          this.form.source = response.url
          this.serviceVideo.UpdateVideo(this.router.snapshot.params.id,this.form).subscribe(()=>{
            this.isSuccessful = true
          })
        }
      });
  }
}

}
