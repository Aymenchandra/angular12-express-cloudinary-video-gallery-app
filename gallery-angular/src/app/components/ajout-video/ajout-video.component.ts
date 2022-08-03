import { Component, OnInit } from '@angular/core';
import { UploadvideoService } from 'src/app/_services/uploadvideo/uploadvideo.service';
import { VideoService } from 'src/app/_services/video/video.service';
import { form2 } from 'src/app/_models/forms2';


@Component({
  selector: 'app-ajout-video',
  templateUrl: './ajout-video.component.html',
  styleUrls: ['./ajout-video.component.css']
})
export class AjoutVideoComponent implements OnInit {

  form: any = {
    title: null,
    description: null,
    source: null,
  };
  isSuccessful = false;
  Inprogress = false;
  isFailed = false;
  errorMessage = '';

  form2 = new form2()
  arrayform : any[] = [];
  value: number = 0;
  files: File[] = [];

  constructor(
    private _uploadService: UploadvideoService,
    private Videoservice: VideoService  
    ) { }

    
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if(this.files.length == 0){
      this.isFailed = true;
      this.errorMessage = "Please select your video";
    }
    else{
      this.isFailed = false;

      const data = new FormData();
      data.append('file', this.files[0]);
      data.append('upload_preset', 'lkffra40');
      data.append('cloud_name', 'dcscoeeoo');
      this.progressbar()
      this._uploadService.uploadImage(data).subscribe((response) => {
        if (response) {
          this.Inprogress = false;
          this.form.source = response.url
          console.log(response)
          this.Videoservice.addvideo(this.form).subscribe((res)=>{
            if(res){
              this.isSuccessful = true;
            }
          })
        }
        else {
          this.Inprogress = false;
          this.isFailed = true;
          this.errorMessage = "Something wrong while adding video";
        }
      });
  }
  
}
addform(){
    this.form2 = new form2()
    this.arrayform.push(this.form2)
}
removeform(position:any){
    this.arrayform.splice(position,1)
}
progressbar(){
  this.value = 0
  this.Inprogress = true;
  setInterval(()=>{
    this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 99) {
          this.value = 99;
      }
  }, 1000);
}
// file methode
onFileSelected(event:any){
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


}
