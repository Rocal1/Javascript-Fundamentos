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

// OTRA FORMA
// function imprimirNombreEnMayusculas(persona){
//     nombre= persona.nombre.toUpperCase()
//     console.log(nombre)
//     //console.log(persona.nombre.toUpperCase()) --Otra forma
// }

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
