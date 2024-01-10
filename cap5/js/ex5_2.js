//declara vetor de escopo global que irá conter os números já apostados
var erros = []

//gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100 ) + 1

//declara constante com os nº de chances
const CHANCES = 6;

function apostarNumero(){
    //cria referência ao campo de entrada e obtem seu conteúdo
    var inNumero = document.getElementById("inNumero")
    var numero = Number(inNumero.value)
    
    //valida o número
    if(numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido...")
        inNumero.focus()
        return
    }

    //referência espaços de saída de dados
    var outDica = document.getElementById("outDica")
    var outErros = document.getElementById("outErros")
    var outChances = document.getElementById("outChances")
    
    //se aposta do jogador for igual ao número sorteado
    if(numero == sorteado){
        alert("Parabéns!! Você acertou!!!")
        //troca status de botões
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado
    }else{
        //se um número existe no vetor erros
        if(erros.indexOf(numero) >= 0){
            alert("Você já apostou o número " + numero + ". tente outro...")
        }else{
            erros.push(numero) //adciona numero ao vetor
            var numErros = erros.length; //obtém tamanho do vetor
            var numChances = CHANCES - numErros //calcula o número de chances
            //exibe n° de erros, conteúdo do vetor e n° de chances
            outErros.textContent = numErros + "(" + erros.join(",")+")"
            outChances.textContent = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                btApostar.disabled = true
                btJogar.className = "exibe"
                outDica.textContent ="Game Over!! Número Sorteado: " + sorteado
            }else{
                //usa operador ternário (condicional) para mensagem da dica
                var dica = numero < sorteado ? "maior" : 'menor'
                outDica.textContent = "dica: tem um número " + dica + " que " + numero
            }
        }
    }
    //Limpa campo de entrada e posiciona o cursos neste campo
    inNumero.value = ""
    inNumero.focus()
}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNumero)
function jogarNovamente() {
    location.reload();    // recarrega a página
}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);
  

  