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

function imprimirNombreEnMayusculas({nombre}){
    nombre= nombre.toUpperCase()
    console.log(nombre)
    //console.log(persona.nombre.toUpperCase()) --Otra forma
}

imprimirNombreEnMayusculas(rodrigo)
imprimirNombreEnMayusculas(Diego)
