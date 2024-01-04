function ePrimo() {
    var inNumero = document.getElementById("inNumero")
    var outPrimo = document.getElementById("outPrimo")
    
    var numero = Number(inNumero.value)
    var bol = true;

    if (isNaN(numero) || numero == '') {
        alert("Informe um número  válido...")
        inNumero.focus()
        return
    } 

    for (let i = 2; i < numero/2; i++) {
        if (numero % i == 0) {
            bol = false;
            break;
        }
    }
    if (bol) {
        outPrimo.textContent = `${numero} é primo`
    } else {
        outPrimo.textContent = `${numero} não é primo`
    }
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",ePrimo)