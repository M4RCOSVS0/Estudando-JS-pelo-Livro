function verificaTriangulo() {
    var inA = document.getElementById("inA")
    var inB = document.getElementById("inB")
    var inC = document.getElementById("inC")
    var outLados = document.getElementById("outLados")
    var outTipo = document.getElementById("outTipo")

    var a = Number(inA.value)
    var b = Number(inB.value)
    var c = Number(inC.value)

    if ((isNaN(a) || a == '')||(isNaN(b) || b == '')||(isNaN(c) || c == '')) {
        alert("valor invalido!")
        inA.focus();
        inB.focus();
        inC.focus();
        return
    }
    var tri
    if ((a < b+c) && (b < a+c) && (c < b+a)) {
        outLados.textContent = "Lados podem formar um triângulo"
        if (a == b && a == c) {
            tri = "Equilátero"
        }else if (a != b && a != c && b != c) {
            tri = "Escaleno"
        }else{
            tri = "Isósceles" 
        }
        outTipo.textContent = `Tipo: ${tri}`
    }else{
        outLados.textContent = "Lados não podem formar um triângulo"
    }   
}

function limparCampos(){
    location.reload()
    document.getElementById("InA").focus()
    document.getElementById("InB").focus()
    document.getElementById("InC").focus()
}


var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click",verificaTriangulo)

var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click",limparCampos)