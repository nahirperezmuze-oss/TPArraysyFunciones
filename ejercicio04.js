const evaluarParidad = (numero) => {
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
};
const numeroIngresado = parseInt(prompt("Ingrese un numero entero:"));
console.log("Dato ingresado por el usuario:", numeroIngresado);
const resultado = evaluarParidad(numeroIngresado);
console.log("Lo que devolvio la funcion:", resultado);
document.body.innerHTML += `<h3> Analisis del numero ${numeroIngresado}: ${resultado}</h3>`;
