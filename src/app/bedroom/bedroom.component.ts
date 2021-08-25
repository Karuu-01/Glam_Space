import { Component, OnInit } from '@angular/core';
import { Bedroom } from '../bed';
import { BedroomService } from '../bedroom.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  
  bedrooms:any;
  
  constructor(public bedroomService:BedroomService) {
   }
 
   getBedrooms(){
     this.bedroomService.getBedrooms().then((success)=>{
      this.bedrooms = this.bedroomService.bedroom;
     },
     (error)=>{
       console.log(error)
     });
}

  ngOnInit(): void {
    this.getBedrooms();
    
  }
  

}
