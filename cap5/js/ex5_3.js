var carros = []

function adicionarCarros(){
    var inModelo = document.getElementById("inModelo")
    var inPreco = document.getElementById("inPreco")
    var inAno = document.getElementById("inAno")

    var modelo = inModelo.value
    var preco = Number(inPreco.value)
    var ano = Number(inAno.value)

    if(modelo == "" || preco == 0 || isNaN(preco) || ano < 1900 || isNaN(ano)){
        alert("Informe corretamente os dados")
        inModelo.focus()
        return
    }
    carros.push({modelo: modelo, preco: preco, ano: ano})

    inModelo.value = "";
    inPreco.value = "";
    inAno.value = "";
    inModelo.focus();

    listarCarros()
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros() {
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }

    var lista = ""

    for (let i = 0; i < carros.length; i++) {
        lista += `${carros[i].modelo} - Ano ${carros[i].ano} - R$ ${carros[i].preco.toFixed(2)}\n`        
    }

    document.getElementById("outLista").textContent = lista;
}

var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros)

function filtrarcarros() {
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

    if (maximo == 0 || isNaN(maximo)) {
        return
    }

    var lista = ""
    
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].preco <=  maximo) {
            lista += `${carros[i].modelo} - Ano ${carros[i].ano} - R$ ${carros[i].preco.toFixed(2)}\n`        
        }     
    }

    var outLista = document.getElementById("outLista");

    if (lista == "") {
        outLista.textContent = "Não há carros com o preço até R$ " + maximo.toFixed(2) + "\n -------------------------\n" + lista
    }else{
        outLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n------------------------------\n" + lista
    }
}

var btFiltrar = document.getElementById("btFiltrar");
btFiltrar.addEventListener("click", filtrarcarros)

function filtrarCarrosAno() {
    var ano = Number(prompt("Qual o ano do carro que deseja?"))

    if (ano == 0 || isNaN(ano)) {
        return
    }

    var lista = ""
    
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].ano ==  ano) {
            lista += `${carros[i].modelo} - Ano ${carros[i].ano} - R$ ${carros[i].preco.toFixed(2)}\n`        
      
        }     
    }

    var outLista = document.getElementById("outLista");

    if (lista == "") {
        outLista.textContent = "Não há carros com o ano " + ano + "\n -------------------------\n" + lista
    }else{
        outLista.textContent = "Carros do ano " + ano + ":\n------------------------------\n" + lista
    }
}

var btFiltrarAno = document.getElementById("btFiltrarAno");
btFiltrarAno.addEventListener("click", filtrarCarrosAno)