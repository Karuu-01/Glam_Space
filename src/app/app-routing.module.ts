import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivingRoomComponent } from './living-room/living-room.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';

const routes: Routes = [
  {path: 'LivingRoomComponent', component: LivingRoomComponent},
  {path: 'KitchenComponent', component: KitchenComponent},
  {path: 'BedroomComponent', component: BedroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
