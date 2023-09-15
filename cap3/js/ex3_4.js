function fusoHorario(){
    var inHora = document.getElementById("inHora")
    var outValue = document.getElementById("outValue")
    
    var hora = Number(inHora.value)

    if(inHora.value == "" || isNaN(hora)){
        alert("Informe a hora no Brasil corretamente") 
        inHora.focus()
        return
    }

    var horaFranca = hora + 5

    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    }
    outValue.textContent = `Hora na França: ${horaFranca.toFixed(2)}`
}
var btExibir = document.getElementById("btResultado")
btExibir.addEventListener("click", fusoHorario)