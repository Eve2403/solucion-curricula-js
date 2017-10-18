//ingresos
var income = prompt("¿Cuánto es el ingreso?");//400
//costo
var costs = prompt("¿Cuánto es el costo?");//65
//impuestos
var taxPercent = prompt("¿Cuánto es el poorcentaje (%) de impuestos?");//18
//ganancia bruta
var grossProfit = income-costs;//335
//obtener cantidad de impuestos
var tax = grossProfit*taxPercent/100;//60.3
//ganancia neta
var netIncome = grossProfit-tax;
//mostrando ganancia neta
document.write("Tu ganancia neta es $"+ netIncome);
