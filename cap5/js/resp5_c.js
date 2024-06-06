var candidatos = []

function adcionarCandidato() {
    var inCand = document.getElementById("inCand")
    var inArcertos = document.getElementById("InAcert")

    var candidato = inCand.value
    var acertos = Number(InAcert.value)

    if (acertos == "" || candidato == ""||isNaN(acertos)) {
        alert("Informe corretamente os dados")
        inCand.focus()
        return;
    }

    candidatos.push({candidato: candidato,acertos: acertos})

    inCand.value = ""
    inArcertos.value = ""
    inCand.focus()

    listarCandidatos()
}
var btAdcionar = document.getElementById("btAdcionar")
btAdcionar.addEventListener("click",adcionarCandidato)


function listarCandidatos(){
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    var lista = ""

    for (let i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].candidato + " - " + candidatos[i].acertos + " acertos\n"
    }

    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click",listarCandidatos)

function segundaFase() {
    if (candidatos.length == 0) {
        alert("Não há candidatos na lista");
        return;
    }

    var quant = Number(prompt("Número de acertos para Aprovação?"));

    var lista = "";

    var fase2 = [];

    for (let i = 0; i < candidatos.length; i++) {
        if (candidatos[i].acertos >= quant) {
            fase2.push({ candidato: candidatos[i].candidato, acertos: candidatos[i].acertos });
        }
    }

    fase2.sort((a, b) => b.acertos - a.acertos);

    for (let i = 0; i < fase2.length; i++) {
        lista += fase2[i].candidato + " - " + fase2[i].acertos + " acertos\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btListar2 = document.getElementById("btListar2");
btListar2.addEventListener("click", segundaFase);
