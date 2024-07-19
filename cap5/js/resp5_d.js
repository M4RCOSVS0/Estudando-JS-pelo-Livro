noticias = []
function adcionarNoticia() {
    var inNot = document.getElementById("inNot")
    var outQuant = document.getElementById("outQuant");

    var notic = inNot.value

    noticias.unshift(notic)

    outQuant.textContent = "Notícias Cadastradas: " + noticias.length;

    inNot.value = "";
    inNot.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adcionarNoticia);

function listarNoticias() {
    var outLista = document.getElementById("outLista");
    var num = prompt("Quantas notícias você deseja listar?")

    if (num == 0 || isNaN(num) || noticias.length < num) {
        alert("número inválido");
        return;
    }
    outLista.textContent = num + " Últimas Notícias\n-------------------------------------------------\n"
    for (let i = 0; i < num; i++) {
        outLista.textContent += num - i +"º)" + noticias[i] + "\n"
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", listarNoticias);