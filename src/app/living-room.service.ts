import { Injectable } from '@angular/core';
import { Living } from './living';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivingRoomService {

  
  living!:Living;

  constructor(private http:HttpClient) { 
    this.living = new Living("","","");
  }

  getKitchen(){
    interface ApiResponse{
        description:string;
        place: string;
        link:string
      
    }
  
  let livingUrl = `https://glam-space-api.herokuapp.com/livingrooms`

  let promise = new Promise<void>((resolve,reject) =>{
    this.http.get<ApiResponse>(livingUrl).toPromise().then
    (response => {
      this.living = response;

      resolve()
    },
    error=>{
      this.living.description = "We couldn’t find any description matching the living given"

      reject(error)
      })
    })
    return promise;
  }
}
