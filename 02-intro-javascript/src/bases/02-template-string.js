const name = "Enzo";
const surname = "Cazenave";

const fullName = `${name} ${surname}`

console.log(fullName)

function getSaludo(name) {
    return `Hola ${name}`;
}

console.log(`Este es un text: ${getSaludo(name)}`)