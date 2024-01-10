var idades = [12,9,15,17,14]
var maiores = false;
for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log(idades[i]);
        maiores = true;
    }
}
if(!maiores){
    console.log("Não há idades maiores que 18 na lista")
}