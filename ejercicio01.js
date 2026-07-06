const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
console.log(meses);
const pantalla = document.getElementById("pantalla");

let lista = `<h2>  Lista de Meses </h2>`;
lista += `<ul>`;
for (let i = 0; i < meses.length; i++) {
  lista += `<li> ${meses[i]}</li>`;
}

lista += `</ul>`;
console.log(lista);
pantalla.innerHTML += lista;