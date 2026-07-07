const generarTabla = (numero) => {
  let html = `
        <div style="margin-top: 20px; font-family: monospace; font-size: 16px;">
            <h3>Tabla de multiplicar del ${numero}</h3>
            <ul style="list-style-type: none; padding: 0;">
    `;
  for (let i = 1; i <= 10; i++) {
    html += `<li>${numero} x ${i} = <strong>${numero * i}</strong></li>`;
  }
  html += `
            </ul>
            <hr>
        </div>
    `;
  console.log("HTML generado por la función:", html);
  return html;
};
let numeroUsuario = Number(
  prompt("Ingrese un número para ver su tabla de multiplicar:"),
);
console.log("Número ingresado por el usuario:", numeroUsuario);
if (!isNaN(numeroUsuario)) {
  let tablaLista = generarTabla(numeroUsuario);
  document.body.innerHTML += tablaLista;
} else {
  document.body.innerHTML += `<p style="color: red;">Error: Debe ingresar un número válido para generar la tabla.</p>`;
}
