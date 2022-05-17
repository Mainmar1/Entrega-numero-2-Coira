
function gastosMensuales (obraSocial, luz, gas, celular, seguroAuto, sueldoTotal){

    let gastos = obraSocial + luz + gas + celular + seguroAuto;

    let dinero_disponible = sueldoTotal - gastos;

    return dinero_disponible;
    
}

let rta = confirm("Desea calcular sus gastos fijos mensuales? \n SI = ACEPTAR -- NO = CANCELAR");
    let obraSocial = 0;
    let luz = 0;
    let gas = 0;
    let celular = 0;
    let seguroAuto = 0;
    let sueldoTotal = 0;

while ( rta == true){
     obraSocial = parseInt(prompt("Ingresar monto de obra social"));
     luz = parseInt(prompt("Ingresar monto de la luz"));
     gas = parseInt(prompt("Ingresar monto del gas"));
     celular = parseInt(prompt("Ingresar monto de la factura de celular"));
     seguroAuto = parseInt(prompt("Ingresar monto del seguro del auto"));
     sueldoTotal = parseInt(prompt("Ingresar el total del sueldo de este mes"));


     if ( isNaN(obraSocial) || isNaN(luz) || isNaN(gas) || isNaN(celular) || isNaN(seguroAuto)){
        alert("No ingresaste numeros! Debes ingresar solo numeros!");
     }
     else if (obraSocial == "" || luz == "" || gas == "" || celular == "" || seguroAuto == ""){
        alert("No ingresaste numeros! Debes ingresar solo numeros!");
     }
     else {
        let msj = gastosMensuales(obraSocial,luz,gas,celular,seguroAuto,sueldoTotal);
        alert("El dinero disponible para gastos o ahorros de este mes es de: " + msj);
     } 

rta = confirm("Desea volver a calcular sus gastos fijos mensuales? \n SI = ACEPTAR -- NO = CANCELAR");
    
};

if (rta == false){
    alert("Hasta la proxima, ENTER PARA CERRAR EL PROGRAMA");
};