function calcularMedia(){
    //cria referencias aos elementos da pagina
    var inNome = document.getElementById("inNome")
    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var outSituacao = document.getElementById("outSituacao")
    var outMedia = document.getElementById("outMedia")

    //obtém os conteúdos dos campos de edição da pagina
    var nome = inNome.value 
    var nota1 = Number(inNota1.value)
    var nota2 = Number(inNota2.value)

    // calcula a media das notas
    var media = (nota1 + nota2) / 2

    //apresenta a media (altera o conteúdo do elemento outMedia)
    outMedia.textContent = `Média das Notas ${media.toFixed(1)}`

    //cria a condição
    if (media >= 7){
        //altera o texto e o estilo da cor do elemento outSituação
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outSituacao.style.color = "blue";
    }else if(media >= 4){
        outSituacao.textContent = `Atenção  ${nome}! Você está de recuperação!`
        outSituacao.style.color = "green";
    
    }else{
        outSituacao.textContent = `Ops ${nome} Você foi reprovado(a)`
        outSituacao.style.color = "red";
    }
}
//cria referencia ao botão
var btResulado = document.getElementById("btResultado")
//registra um evento associado ao  botão, para arregar uma função
btResulado.addEventListener("click", calcularMedia)