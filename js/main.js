/*class Comida{
constructor(id, nombre, color){
    this.id = id;
    this.nombre = nombre;
    this.color = color;
}
nombrar(){
    return `${this.nombre} de color ${this.color}` 
}
}

 const manzana = new Comida(1, 'manzana','rojo');
 const pera = new Comida(2, 'pera', 'verde');
console.log(manzana.nombrar());
console.log(pera.nombrar());*/
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        let Dni ;
    }
set estableceDni(valor){
    this.Dni = valor;
}
get regresaDni(){
    return this.Dni;
}
saludar(){
    console.log("hola, soy " + this.nombre  + " tengo "  +  this.edad +  " anos mi Dni es " + this.Dni);
}
}
let objetoPersona =  new Persona("corina ciorpac",40);

objetoPersona.estableceDni = "76546767";
objetoPersona.saludar();
console.log(objetoPersona.regresaDni)