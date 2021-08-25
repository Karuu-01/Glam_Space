import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LivingRoomComponent } from './living-room/living-room.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactsComponent
    LivingRoomComponent,
    BedroomComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
