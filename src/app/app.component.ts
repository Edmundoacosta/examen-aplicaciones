import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cartelera';

  examen: any[];

  constructor(private servicio: AppService) {

  }

  ngOnInit() {
  	this.servicio.getContactos()
  		.subscribe(response => this.examen = response );
  }
}
