function raizQuadrada(){
    var inNum = document.getElementById("inNum")
    var outResultado = document.getElementById("outResultado")

    var num = Number(inNum.value) 

    if(inNum.value == "" || isNaN(num)){
        alert("E necessário digitar um número!")
        inNum.focus()
        return
    }
    if (Math.sqrt(num) == Math.ceil(Math.sqrt(num))){
        outResultado.textContent = `Há raiz quadrada de ${num} é ${Math.sqrt(num)}`
    }else{
        outResultado.textContent = `Não há raiz exata para ${num}`
    }
}
var btExibir = document.getElementById("btCalcular")
btExibir.addEventListener("click", raizQuadrada)