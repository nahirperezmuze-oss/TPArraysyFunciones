const analizarMayusculas = (texto) => {
  if (texto === texto.toUpperCase()) {
    return "El texto esta formado solo por mayusculas.";
  } else if (texto === texto.toLowerCase()) {
    return "El texto esta formado solo por minusculas.";
  } else {
    return "El texto tiene una mezcla de mayusculas y minusculas.";
  }
};
const textoIngresado = prompt("Ingrese un texto o palabra para analizar:");
if (textoIngresado !== null && textoIngresado !== "") {
  const resultadoAnalisis = analizarMayusculas(textoIngresado);
  document.body.innerHTML += `
    <div>
    <p> Texto ingresado: ${textoIngresado} </p>
    <p> Analisis: ${resultadoAnalisis} </p> 
    </div>`;
} else {
  document.body.innerHTML += `<p>No se ingreso ningun texto valido para analizar.</p>`;
}
