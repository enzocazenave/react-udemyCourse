import { getHeroeById } from "./bases/08-impo-exp";

//const promesa = new Promise((success, error) => {
//    setTimeout(()=> {
//        const heroe = getHeroeById(2);
//        success(heroe);
//    }, 2000)
//})
//
//promesa.then((heroe) => {
//    console.log("Heroe", heroe)
//}).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((success, error) => {
        setTimeout(()=> {
            const heroe = getHeroeById(id);
            
            if (heroe) {
                success(heroe);
            } else {
                error("No se pudo encontrar el heroe");
            }
                
        }, 2000)
    });
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);