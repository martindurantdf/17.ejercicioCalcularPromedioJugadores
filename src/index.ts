/**
 • El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas
 */

let edadJugadores: number[] = []; //arreglo para guardar la edad de los jugadores
let edadMinima: number = 3; // edad minima que puede tener un jugador
let edadMaxima: number = 7; // edad maxima que puede tener un jugador

//Función que genera aleatoriamente la edad de los jugadores
function generarEdadAleatoria(min: number, max: number):number{
  return Math.round((Math.random() * (max - min) + min));
}

//Función que carga el arreglo con valores aleatorios de edades de jugadores
function cargarArreglo(arrayJugadores: number[], min: number, max: number): void {
  let cantidad: number = Number(prompt("Ingrese la cantidad de jugadores:"));
  for (let i: number = 0; i < cantidad; i++) {
    arrayJugadores.push(generarEdadAleatoria(min, max));
  }
}

//Funcion que imprime la edad de los jugadores y el promedio de ellas.
function mostrarEdadesyPromedio(arrayJugadores: number[]): void {
  let promedio: number = 0;
  for (var i in arrayJugadores) {
    promedio += arrayJugadores[i];
  }
  console.log(`La edad de los jugadores es: ${arrayJugadores}`);
  console.log(`El promedio de edad de los jugadores es: ${(promedio / arrayJugadores.length).toFixed(1)}`);
}

cargarArreglo(edadJugadores, edadMinima, edadMaxima);
console.log("Se cargará automaticamente la edad de los jugadores");
mostrarEdadesyPromedio(edadJugadores);
