const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;
  apariciones[suma]++;
}
console.log (apariciones)
let tablaPantalla = `<table border= "1" style= "border-collapse: collapse; text-aling: center; margin-top: 20px;">`;
tablaPantalla += `
<tr>
 <th style= "border: 2px dotted #5abdd9; padding: 8px 20px;"> Suma 🎲🎲 </th>
 <th style= "border: 2px dotted #5abdd9; padding: 8px 20px;" > Apariciones </th>
</tr>
`;
for (let i = 2; i <= 12; i++) {
  tablaPantalla += `
    <tr>
    <td style= "border: 2px dotted #5abdd9; padding: 8px 20px;" > ${i}</td>
    <td style= "border: 2px dotted #5abdd9; padding: 8px 20px;" > ${apariciones [i]}</td>
    </tr>
    `;
}
tablaPantalla += `</table>`;
document.body.innerHTML += tablaPantalla;
