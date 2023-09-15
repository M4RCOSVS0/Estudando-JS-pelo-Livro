function mostrarTabuada(){
    //Cria referencia aos elementos da pagina
    var inNumero = document.getElementById("inNumero")
    var outTabuada = document.getElementById("outTabuada")

    //converte conteudo do campo inNumero
    var numero = Number(inNumero.value)
    
    //valida o numero
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número valido...");
        inNumero.focus();
        return;
    }
    //cria uma variavel do tipo String, que ira concatenar a resposta
    var resposta = "";

    //cria um laço de repetição
        for (var i=1; i <= 10; i++){
            // a variavel resposta vai acumulando os novos conteudos
            resposta = `${resposta + numero} x ${i} = ${numero * i} \n`
        }
    //conteudo da tal pre e aterado para exibir a tabuada do nº
    outTabuada.textContent = resposta
}
//cria referencia ao botão e apos associa function ao evento click
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)

