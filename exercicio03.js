function ex03 () { 
    let ganhoAnual =0;
    let gastoAnual = 0; 
    for (let i = 1; i<= 3; i++)  {
    let ganho = Number (prompt (ganho do mês " + i"));
     let gasto = Number(prompt("gasto do mês " + i));
ganhoAnual += ganho; 
gastoAnual += gasto; 
console.log (ganhoAnual);
console.log (gastoAnual); 
let saldo = ganhoAnual - gastoAnual; 
alert ("ganho anual: ", ganhoAnual);
alert ("gasto anual: ", gastoAnual);
alert ("saldo anua:", saldo);

if (saldo>0) {
    alert ("lucro!")
}else {
    alert ("não sobra nada")
}

}
}