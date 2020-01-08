var rodrigo={
    nombre: "Rodrigo",
    edad: 24,
    direccion: "Laprida 451"
}
var Diego={
    nombre: "Diego",
    edad: 24,
    direccion: "Av. Mate de luna"
}

function imprimirNombreEnMayusculas(persona){
    var nombre= persona.nombre.toUpperCase()
    console.log(nombre)
    //console.log(persona.nombre.toUpperCase()) --Otra forma
}

imprimirNombreEnMayusculas(rodrigo)
imprimirNombreEnMayusculas(Diego)

function imprimirNombreYEdad(persona){
    var nombre=persona.nombre
    var edad=persona.edad
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}    
//Básicamente lo único que hace la función es que recibe un Objeto 
//en este caso persona y cuando ocupas return la función retorna 
//un objeto nuevo (una copia del objeto que esta entre paréntesis)