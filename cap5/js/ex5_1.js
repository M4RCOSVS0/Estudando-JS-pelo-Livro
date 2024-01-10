var pacientes = []  //declara vetor global
function adicionarPaciente(){
    //cria referência aos elementos de entrada e saída de dados da página
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")
    var nome = inPaciente.value //obtém o nome do paciente

    //verifica o nome do paciente
    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return;
    }
    pacientes.push(nome)    //adiciona o nome no final do vetor
    var lista = ""  //string para concatenar pacientes

    //percorre os elementos do vetor
    for(i=0;i<pacientes.length;i++){
        lista += `${i + 1} . ${pacientes[i]} \n`
    }

    //altera o conteúdo da tag outlista
    outLista.textContent = lista

    //limpa campo e posiciona cursor em inPaciente
    inPaciente.value = ""
    inPaciente.focus()
}
//cria refêrencia ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar")
btAdicionar.addEventListener("click", adicionarPaciente)

function acionarUrgencia(){
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")
    var nome = inPaciente.value 

    if(nome == ""){
        alert("Informe o nome do paciente")
        inPaciente.focus()
        return;
    }
    pacientes.unshift(nome) //adiciona o nome no inicio do vetor   
    var lista = ""  

    for(i=0;i<pacientes.length;i++){
        lista += `${i + 1} . ${pacientes[i]} \n`
    }

    outLista.textContent = lista

    inPaciente.value = ""
    inPaciente.focus()
}
var btUrgencia = document.getElementById("btUrgencia")
btUrgencia.addEventListener("click", acionarUrgencia)

function atenderPaciente(){
    //cria referência aos elementos de saída de dados
    var outAtendimento = document.getElementById("outAtendimento")
    var outLista = document.getElementById("outLista")
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")

    //verifica se o vetor pacientes está vazio
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera")
        inPaciente.focus()
        outAtendimento.textContent = ''
        return
    }
    
    //remove paciente do início da fila (e obtém nome)
    var atender = pacientes.shift()

    //exibe nome do paciente em atentimento
    outAtendimento.textContent = atender

    //string para concatenar pacientes
    var lista = ""

    //percorre os elementos do vetor
    for(i=0;i<pacientes.length;i++){
        lista += `${i + 1} . ${pacientes[i]} \n`
    }
    //altera o conteudo da tag outLista
    outLista.textContent = lista
}
var btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atenderPaciente)