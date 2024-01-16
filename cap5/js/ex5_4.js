var criancas = []
function adcionarCriancas(){
    var inNome = document.getElementById("inNome")
    var inIdade = document.getElementById("InIdade")

    var nome = inNome.value 
    var idade = Number(inIdade.value)

    if(nome == "" || inIdade.value == "" || isNaN(idade)){
        alert("Informe corretamente os dados")
        inNome.focus()
        return;
    }

    criancas.push({nome: nome, idade: idade})

    inNome.value = 
    inIdade.value = ""
    inNome.focus()

    listarCriancas()
}
var btAdcionar = document.getElementById("btAdcionar")
btAdcionar.addEventListener("click", adcionarCriancas)

function listarCriancas() {
    if(criancas.length == 0){
        alert("Não a crianças na lista");
        return;
    }

    var lista = "";
    for (let i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " 
    }


