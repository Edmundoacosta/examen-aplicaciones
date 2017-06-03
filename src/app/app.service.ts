import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AppService {
	examen: FirebaseListObservable<any>;


  constructor(private af: AngularFireDatabase) { }

  getContactos() {
  	this.examen = this.af.list('/') as FirebaseListObservable<any>;
  	return this.examen;
  }
  
}
