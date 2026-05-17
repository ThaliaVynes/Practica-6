let saldo = 0;

function depositar(){
   let monto = Number(document.getElementById("monto").value);
   saldo += monto;
   alert("Depósito exitoso");
}

function retirar(){
   let monto = Number(document.getElementById("monto").value);
   if(monto <= saldo){
      saldo -= monto;
      alert("Retiro exitoso");
   }else{
      alert("Saldo insuficiente");
   }

}

function mostrarSaldo(){
   document.getElementById("saldoTexto").innerHTML =
   "S/ " + saldo;
}

// El saldo no se actualiza automáticamente.
//  Después de cada depósito o retiro, es necesario presionar el botón “Ver saldo”
//   para visualizar el saldo actual.
