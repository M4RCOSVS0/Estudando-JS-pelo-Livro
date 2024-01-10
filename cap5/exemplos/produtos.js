var produtos = ['Arros', 'Feijão', 'Iourgute', 'Leite', 'Suco', 'Pão'];//declara e define conteúdo inicial do vetor
console.log(`produtos`)
produtos.push("Farinha")  //adiciona string ao final do vetor
produtos.unshift("Manteiga") //adiciona ao ínicio e desloca as demais
produtos.pop() //remove a ultima string do vetor
produtos.shift() //remove a primeira e "sobe" as demais
for(let pos in produtos){
    console.log(`${pos} ${produtos[pos]}`)
}
