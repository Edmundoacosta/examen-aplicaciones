export class Libro {
titulo:string;
resena:string;
autor:string;
visible:boolean;
img:string;

	constructor(titulo, resena, autor, img){
		this.titulo= titulo;
		this.resena= resena;
		this.autor= autor;
		this.visible= false;
		this.img = img;
	}

	cambiarVisibilidad(){
		this.visible=!this.visible;
	}



}


