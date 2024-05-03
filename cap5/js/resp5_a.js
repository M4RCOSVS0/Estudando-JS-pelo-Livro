var times = []

function adicionarTimes() {
    var inClube = document.getElementById("inClube")

    var clube = inClube.value

    if (clube == "") {
        alert("Informe o nome do clube")
        inClube.focus()
        return
    }
    times.push(clube)
    listarTimes()
    inClube.value = "";
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTimes);

function listarTimes() {
    if (times.length == 0) {
        alert("Não há times na lista")
    }

    var lista = ""

    for (let i = 0; i < times.length; i++) {
        lista += i+1 + " - " + times[i] +"\n";
    }

    document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTimes)

function montarTabela() {
    if (times.length == 0 || times.length % 2 != 0) {
        alert("Quantidade de times inválida!")
        return
    }
    var lista = ""
    var c = times.length
    for (let i = 0; i < times.length/2; i++) {
        lista += times[i] + " x " + times[c-1] + "\n"
        c--
    }

    document.getElementById("outLista").textContent = lista; 
}
var btListar = document.getElementById("btMontar");
btListar.addEventListener("click", montarTabela)