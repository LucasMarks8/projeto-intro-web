//semana 1
//2)
const nome1 = "Banana";
const preco1 = 3.70;
const disponivelEmEstoque1 = true;

const nome2 = "melancia";
const preco2 = 4.00;
const disponivelEmEstoque2 = true;

const nome3 = "melão";
const preco3 = 6.00;
const disponivelEmEstoque3 = true;

//3)
const precoMedio = (preco1 + preco2 + preco3) / 3;
console.log(`O preço médio é: ${precoMedio.toFixed(2)}`);

//4)
const temNoEstoque = disponivelEmEstoque1 && disponivelEmEstoque2 && disponivelEmEstoque3;
console.log(`A verificação é: ${temNoEstoque}`);


//5)
const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"]

const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"]

const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " picolé"]

//6)
console.log(`
    ${nome1.toUpperCase()}
    Preço em São Paulo: ${preco1} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque1}
    Possíveis receitas: ${arrayreceitas1}
`)

console.log(`
    ${nome2.toUpperCase()}
    Preço em São Paulo: ${preco2} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque2}
    Possíveis receitas: ${arrayreceitas2}
`)

console.log(`
    ${nome3.toUpperCase()}
    Preço em São Paulo: ${preco3} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque3}
    Possíveis receitas: ${arrayreceitas3}
`)

//semana 2
//1)
objeto1 = {
    nome: "banana",
    preco: 3.70,
    disponivelEmEstoque: true,
    receitas: arrayreceitas1,
    imagem: "/media/banana.jpg"
}

objeto2 = {
    nome: "melancia",
    preco: 4.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas2,
    imagem: "/media/melancia.jpg"
}

objeto3 = {
    nome: "melão",
    preco: 6.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas3,
    imagem: "/media/melao.jpg"
}

//2)
const arrayDeObjetos = []

//3)
// arrayDeObjetos.push(objeto1, objeto2, objeto3)
// console.log(arrayDeObjetos)

//4 e 5)
if (objeto1.disponivelEmEstoque === true) {
    arrayDeObjetos.push(objeto1)
} else {
    alert("Item 1 não adicionado")
}

if (objeto2.disponivelEmEstoque === true) {
    arrayDeObjetos.push(objeto2)
} else {
    alert("Item 2 não adicionado")
}

if (objeto3.disponivelEmEstoque === true) {
    arrayDeObjetos.push(objeto3)
} else {
    alert("Item 3 não adicionado")
}

console.log(arrayDeObjetos)

//semana 3
//1 e 2)
const refatoracao = arrayDeObjetos.map((objeto) => {
    console.log(`${objeto.nome.toUpperCase()}
preço: ${objeto.preco}
tem no estoque: ${objeto.disponivelEmEstoque}
receitas: ${objeto.receitas}
`)
})

//3)
const devolverStringDeObjeto = (objeto) => {
    console.log(`${objeto.nome.toUpperCase()}
preço: ${objeto.preco}
tem no estoque: ${objeto.disponivelEmEstoque}
receitas: ${objeto.receitas}
    `)
}

devolverStringDeObjeto(arrayDeObjetos[0])
devolverStringDeObjeto(arrayDeObjetos[1])
devolverStringDeObjeto(arrayDeObjetos[2])

//4)
const receberArrayDeObjetos = (arrayDeObjetos, stringAleatoria) => {
    const resultado = arrayDeObjetos.filter((objeto) => {
        return objeto.nome === stringAleatoria
    })

    if(resultado.length > 0){
        console.log(resultado)
    } else {
        alert("nenhum item encontrado")
    }
}

receberArrayDeObjetos(arrayDeObjetos, "banana")

//semana4
//1)done
//2)done
//3)done
//4)done
//5)done
//6)done

