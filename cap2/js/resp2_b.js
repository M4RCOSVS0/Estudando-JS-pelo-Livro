function horaLanhouse(){
    var inQuinze = document.getElementById("inQuinze")
    var inCliente = document.getElementById("inCliente")
    var outValor = document.getElementById("outValor")
    
    var quinze = Number(inQuinze.value)
    var cliente = Number(inCliente.value)

    var valor = (Math.ceil(cliente/15)*quinze).toFixed(2)

    outValor.textContent = `Valor a pagar R$: ${valor}`
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", horaLanhouse)