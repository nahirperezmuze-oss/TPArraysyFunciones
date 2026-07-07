const calcularPerimetro = (a, b) => {
    let p = 2 * (a + b);
    console.log("calculo interno del perimetro:", p);
    return p;
};
let valorA = Number(prompt("Ingrese el valor del lado A (por ejemplo: 24):"));
let valorB = Number(prompt("Ingrese el valor del lado B (por ejemplo: 5):"));
console.log ("Valores capturados: lado A:", valorA, ",Lado B:", valorB);
if (!isNaN(valorA) && !isNaN(valorB)) {
    let perimetroFinal = calcularPerimetro(valorA, valorB);
    console.log("resultado listo:", perimetroFinal);
    document.body.innerHTML += `
        <div style="margin-top: 20px;">
            <h3>Cálculo de Perímetro</h3>
            <ul>
                <li>Lado A: ${valorA}</li>
                <li>Lado B: ${valorB}</li>
            </ul>
            <p><strong>El perímetro del rectángulo es: ${perimetroFinal}</strong></p>
            <hr>
        </div>
    `;
} else {
    document.body.innerHTML += `<p style="color: red;">Error: Por favor, ingrese valores numéricos válidos.</p>`;
}