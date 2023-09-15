function calcularPeso(){
    var inNome = document.getElementById("inNome")
    var brMasculino = document.getElementById("brMasculino")
    var brFeminino = document.getElementById("brFeminino")
    var inAltura = document.getElementById("inAltura")
    var outResposta = document.getElementById("outResposta")

    var nome = inNome.value 
    var masculino  = brMasculino.checked
    var feminino = brFeminino.checked
    var altura = Number(inAltura.value)

    if(nome == "" || (masculino == false && feminino == false)) {
        alert("Por farvor, informe o nome e selecione o sexo...")
        inNome.focus()      //posiciona (joga o foco) no campo de edição inNome
        return
    }

    //se altura vazio (0) ou NaN: (um texto for informado, por exemplo)
    if(altura == 0 || isNaN(altura)) {
        alert("por favor, informe a altura corretamente...")
        inAltura.focus()
        return
    }

    //se masculino (significa se maculino == true)
    if(masculino){
        var peso = 22 * Math.pow(altura, 2)     //math.pow eleva ao quadrado 
    }else{
        var peso = 21 * Math.pow(altura, 2)
    }
    
    //apresenta a resposta (altera o conteudo da linha outResposta)
    outResposta.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
}
var btResultado = document.getElementById("btCalcular")
btResultado.addEventListener("click", calcularPeso)

function limparCampos() {
    // recarrega a página
    location.reload()
    //posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus()
}
var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)
