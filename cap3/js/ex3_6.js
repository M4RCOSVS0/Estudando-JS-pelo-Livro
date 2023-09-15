function caixaEletronico(){
    var inSaque = document.getElementById("inSaque")
    var notaCem = document.getElementById("notaCem")
    var notasCiquenta = document.getElementById("notasCiquenta")
    var notaDez = document.getElementById("notasDez")
    //limpa mesnsagem 
    notaCem.textContent = ""
    notasCiquenta.textContent = ""
    notaDez.textContent = ""

    var saque = Number(inSaque.value)

    if(saque == 0 || isNaN(saque)){
        alert("Informe o valor do saque corretamente")
        inSaque.focus()
        return
    }
    
    //verifica se é multiplo de 10 
    if(saque % 10 != 0){
        alert("Valor inválido para as notas disponíveis (R$  10, 50, 100)")
        inSaque.focus()
        return
    }
    
    //calcula notas de 100, 50 e 10
    var n100 = Math.floor(saque/100)
    var resto = saque % 100
    var n50 = Math.floor(resto / 50)
    resto = resto % 50
    var n10 = Math.floor(resto/10)

    //exibe as notas apenas que houver
    if(n100 > 0){
        notaCem.textContent = `Notas de R$ 100: ${n100}`
    }
    if(n50 > 0){
        notasCiquenta.textContent = `Notas de R$ 50: ${n50}`
    }
    if(n10 > 0){
        notaDez.textContent = `Notas de R$ 10: ${n10}`
    }
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", caixaEletronico)
