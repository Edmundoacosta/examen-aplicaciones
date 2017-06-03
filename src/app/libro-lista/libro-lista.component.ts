import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Libro } from '../libro';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
	libros:Array<Libro>;
  examen: any[];
  constructor() {
  	this.libros=[
  		new Libro("El perfume"," la historia de un asesino que mata mujeres para robar sus aromas", "Patrick Suskind", "http://cdn.opentor.com/es-elperfume/el-perfume-portada.jpg"),
  		new Libro("El perfume2"," la historia de un asesino que mata mujeres para robar sus aromas2", "Patrick Suskind2", "http://cdn.opentor.com/es-elperfume/el-perfume-portada.jpg"),
  		new Libro("El perfume3"," la historia de un asesino que mata mujeres para robar sus aromas3", "Patrick Suskind3", "http://cdn.opentor.com/es-elperfume/el-perfume-portada.jpg"),
  	]
  	
  }

  agregar(libro:Libro){
  	this.libros.unshift(libro);
  }

  


  ngOnInit() {
  }



}
