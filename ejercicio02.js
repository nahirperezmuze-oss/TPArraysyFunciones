const ciudades = [];
while (true) {
  let ciudad = prompt(
    "Ingrese el nombre de una ciudad o presione cancelar para terminar:",
  );
  if( ciudad === null ) {
    break;
  }
  if (ciudad !== "") {
    ciudades.push(ciudad);
  }
}
let escrito = `<p>El arreglo de ciudades tiene ${ciudades.length} elementos </p>`;
if (ciudades.length >= 3) {
  escrito += `<ul>`;
  escrito += `<li> Elemento 1er posicion: ${ciudades[0]} </li>`;
  escrito += `<li> Elemento 3er posicion: ${ciudades[2]}</li>`;
  escrito += `<li> Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`;

  ciudades.push("Paris");

  escrito += `<li> Elemento ultima posicion: ${ciudades[ciudades.length - 1]} </li>`;
  escrito += `</ul>`;
  escrito += `<h2> Arreglo de ciudades </h2>`;
  escrito += `<ul>`;
  escrito += `<li> Elemento 2da posicion: ${ciudades[1]}</li>`;
  ciudades[1] = "Barcelona";
  for (let i = 0; i < ciudades.length; i++) {
    escrito += `<li> Elementos: ${ciudades[i]}</li>`;
  }
  escrito += `</ul>`;
} else {
  escrito += `<p> No ingresaste suficientes ciudades para completar el ejercicio. </p>`;
}
document.body.innerHTML += escrito;
