function ladosTriangulo(){
    var inL1 = document.getElementById("inL1")
    var inL2 = document.getElementById("inL2")
    var inL3 = document.getElementById("inL3")
    var outLados = document.getElementById("outLados")
    var outTipo = document.getElementById("outTipo")

    outTipo.textContent = ""

    var l1 = Number(inL1.value)
    var l2 = Number(inL2.value)
    var l3 = Number(inL3.value)
    
    if(l1 == 0 || isNaN(l1) || l2 == 0 || isNaN(l2) || l3 == 0 || isNaN(l3)){
        alert("Informe lados válidos para o triângulo")
        inL1.focus()
        inL2.focus()
        inL3.focus()
        return
    }
    if(l1 > l2 + l3 || l2 > l1 + l3 || l3 > l2 + l1 ){
        outLados.textContent = `Lados não podem formar um triângulo`
    }else if(l1 == l2 && l1 == l3 && l3 == l2){
        outLados.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Equilátero"
    }else if(l1 != l2 && l1 != l3 && l2 != l3){
        outLados.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Escaleno"
    }else{
        outLados.textContent = "Lados podem formar um triângulo"
        outTipo.textContent = "Tipo: Isóceles"
    }

}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", ladosTriangulo)