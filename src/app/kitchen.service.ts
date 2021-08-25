import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kitch } from './kitch';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  kitchen!:Kitch;

  constructor(private http:HttpClient) { 
    this.kitchen = new Kitch("","","");
  }

  getKitchen(){
    interface ApiResponse{
        description:string;
        place: string;
        link:string
      
    }
  
  let kitchenUrl = 'https://glam-space-api.herokuapp.com/kitchens'

  let promise = new Promise<void>((resolve,reject) =>{
    this.http.get<ApiResponse>(kitchenUrl).toPromise().then
    (response => {
      this.kitchen = response;

      resolve()
    },
    error=>{
      this.kitchen.description = "We couldn’t find any description matching the kitchen given"

      reject(error)
      })
    })
    return promise;
  }
}
