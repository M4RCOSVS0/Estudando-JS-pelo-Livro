function imparOupar(){
    var numReal = document.getElementById("numReal")
    var outValue = document.getElementById("outValue")

    var num = Number(numReal.value)

    if(isNaN(num) || num == 0){
        alert("Digite um Número!")
    }

    if(num % 2 == 0){
        outValue.textContent = `Resposta: ${num} é Par`
    }else{
        outValue.textContent = `Resposta: ${num} é Ímpar`
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", imparOupar)