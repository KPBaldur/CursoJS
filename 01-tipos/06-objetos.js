let nombre = "Tanjito";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};


console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 18;
console.log(personaje.edad)

personaje['edad'] = 19;
console.log(personaje.edad)

delete personaje.anime;

console.log(personaje)