import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Must import this to be able to use the Edit user form the way we do
import { FormsModule } from '@angular/forms';

//Imported, we created data.service
import { DataService } from './services/data.service';

//Must import this to use our data services... getting the http module
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//This was imported, we created this user component
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    //This was imported
    UserComponent
  ],
  imports: [
    BrowserModule,
    //Don't forget to add your modules under imports if you add new ones
    FormsModule,
    HttpModule
  ],
  providers: [DataService], //We add DataService here, because services are providers
  bootstrap: [AppComponent]
})
export class AppModule { }
