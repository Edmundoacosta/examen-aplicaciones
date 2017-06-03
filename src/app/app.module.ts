import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { LibroFormComponent } from './libro-form/libro-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppService } from './app.service';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

export const firebaseConfig = {
    apiKey: "AIzaSyC2jBEdC5lamxfU7lp1JkpzVV1g9mIIK50",
    authDomain: "examen-77e77.firebaseapp.com",
    databaseURL: "https://examen-77e77.firebaseio.com",
    projectId: "examen-77e77",
    storageBucket: "examen-77e77.appspot.com",
    messagingSenderId: "446250820362"
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule
  ],
  providers: [
    AngularFireDatabase,
    AppService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
