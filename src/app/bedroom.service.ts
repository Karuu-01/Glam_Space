import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bedroom } from './bed';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {
  
  bedroom!:Bedroom;

  constructor(private http:HttpClient) { 
    this.bedroom = new Bedroom("","","");
  }

  getBedrooms(){
    interface ApiResponse{
        description:string;
        place: string;
        link:string
      
    }
  
  let bedroomUrl = 'https://glam-space-api.herokuapp.com/bedrooms'

  let promise = new Promise<void>((resolve,reject) =>{
    this.http.get<ApiResponse>(bedroomUrl).toPromise().then
    (response => {
      this.bedroom = response;

      resolve()
    },
    error=>{
      this.bedroom.description = "We couldn’t find any description matching the bedroom given"

      reject(error)
      })
    })
    return promise;
  }
}
