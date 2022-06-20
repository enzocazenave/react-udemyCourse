const person = {
    name: 'Enzo',
    surname: 'Cazenave',
    age: 18,
    address: {
        street: 'Santiago del estero',
        number: 632,
        city: 'Ezpeleta',
    }
};

const person2 = {...person};
person2.nombre = "Gutavo";

console.table(person);
console.table(person2);