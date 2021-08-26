import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivingRoomComponent } from './living-room/living-room.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormComponent } from './form/form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'LivingRoomComponent', component: LivingRoomComponent},
  {path: 'KitchenComponent', component: KitchenComponent},
  {path: 'BedroomComponent', component: BedroomComponent},
  {path: 'HomepageComponent', component: HomepageComponent},
  {path: 'FormComponent', component: FormComponent},
  {path: 'ContactsComponent', component: ContactsComponent},
  {path: 'AboutComponent', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
