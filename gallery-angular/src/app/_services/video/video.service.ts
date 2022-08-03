import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { video } from 'src/app/_models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl="http://localhost:8080"
  constructor(private http:HttpClient) { }
  //get all videos service 
  addvideo(data:any):Observable<video[]>{
    return this.http.post<video[]>(`${this.apiUrl}/api/video/addnew`,data)
  }
  
  //get all videos service 
  getVideo():Observable<video[]>{
    return this.http.get<video[]>(`${this.apiUrl}/api/video/findall`)
  }

  //get one by id video service 
  getOneVideo(id:any):Observable<video>{
    return this.http.get<video>(`${this.apiUrl}/api/video/findone/${id}`)
  }
  
  //update one by id video service 
  UpdateVideo(id:any,data:any):Observable<video[]>{
    return this.http.put<video[]>(`${this.apiUrl}/api/video/update/${id}`,data)
  }

  //delete by id video service 
  DeleteVideo(id:any):Observable<video[]>{
    return this.http.delete<video[]>(`${this.apiUrl}/api/video/delete/${id}`)
  }

  //click on delete button to empty comment as update
  //click on update button to modify comment as update
  updateComment(video:video):Observable<video>{
    return this.http.put<video>(`${this.apiUrl}/api/video/update/${video._id}`,video)
  }
}
