function listarNumeros(){
    //cria referencias aos elementos que a function irá manipular
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var numero = Number(inNumero.value)     //obtém o número informado

    //verifica validade do numero
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número  válido...")
        inNumero.focus()
        return
    } 

    //imicializa variável resposta
    var resposta = `Entre ${numero} e 1: `

    //cria um for decrescente
    for (var i = numero; i > 1; i--){
        //resposta vai acumulando números (e vírgulas)
        resposta = resposta + i + ", "
    }
    resposta = resposta + i + "."
    //altera o conteúdo de outResposta
    outResposta.textContent = resposta
}
var btDecrescer = document.getElementById("btDecrescer")
btDecrescer.addEventListener("click", listarNumeros)