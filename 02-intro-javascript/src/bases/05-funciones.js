const saludar = function(nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: "chikicazenave",
})

console.log(saludar('Enzo'))
console.log(saludar2('Enzo'))
console.log(saludar3('Enzo'))

const usuarioActivo = getUsuarioActivo()
console.log(usuarioActivo)