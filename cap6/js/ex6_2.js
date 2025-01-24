function montarDica() {
    var inFruta = document.getElementById("inFruta");
    var outDica = document.getElementById("outDica");

    var fruta = inFruta.value.toUpperCase();

    if (fruta == "") {
        alert("Informe a fruta...");
        inFruta.focus();
        return;
    }

    var respostas = ""
    var estrela = "*";
    var tam = fruta.length;

    for (let i = 0; i < tam; i++) {
        if (fruta.charAt(i) == fruta.charAt(0)) {
            respostas += fruta.charAt(0);
        }else{
            respostas += "_";
        }
        estrela += "*";        
    }
    outDica.textContent = respostas;
    inFruta.value = estrela;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click",montarDica);