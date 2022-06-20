const persona = {
    nombre: "Enzo",
    edad: 18,
    clave: "Ironman"
}

const retornaPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {
    console.log(nombre, edad, clave, rango)
    
    return {
        nombreClave: clave,
        anios: edad,

    }
}

const {nombreClave, anios} = retornaPersona(persona);

console.log(nombreClave, anios)