//semana 1
//2)
const nome1 = "banana";
const preco1 = 3.70;
const disponivelEmEstoque1 = true;

const nome2 = "melancia";
const preco2 = 4.00;
const disponivelEmEstoque2 = true;

const nome3 = "melão";
const preco3 = 6.00;
const disponivelEmEstoque3 = false;

const nome4 = "limão";
const preco4 = 2.00;
const disponivelEmEstoque4 = true;

const nome5 = "laranja";
const preco5 = 2.50;
const disponivelEmEstoque5 = false;

const nome6 = "lichia";
const preco6 = 5.00;
const disponivelEmEstoque6 = true;

const nome7 = "morango";
const preco7 = 7.00;
const disponivelEmEstoque7 = true;

const nome8 = "uva";
const preco8 = 4.50;
const disponivelEmEstoque8 = false;

//3)
const precoMedio = (preco1 + preco2 + preco3 + preco4 + preco5 + preco6 + preco7 + preco8) / 8;
console.log(`O preço médio é: ${precoMedio.toFixed(2)}`);

//4)
const temNoEstoque = disponivelEmEstoque1 && disponivelEmEstoque2 && disponivelEmEstoque3 && disponivelEmEstoque4 && disponivelEmEstoque5 && disponivelEmEstoque6 && disponivelEmEstoque7 && disponivelEmEstoque8;
console.log(`A verificação é: ${temNoEstoque}`);


//5)
const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"]

const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"]

const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " mousse"]

const arrayreceitas4 = ["mousse", " bolo", " caipirinha", " limonada suiça"]

const arrayreceitas5 = ["bolo", " suco", " pudim", " doce com calda"]

const arrayreceitas6 = ["cupcake", " sorvete", " caipirinha", " ceviche"]

const arrayreceitas7 = ["torta", " bolo", " fondue", " geleia"]

const arrayreceitas8 = ["geleia", " pavê", " beijinho", " bombom"]

//6)
console.log(nome1,"\nPreço:", preco1, "\nTem no estoque:", disponivelEmEstoque1,"\nReceitas:", arrayreceitas1)
console.log(nome2,"\nPreço:", preco2, "\nTem no estoque:", disponivelEmEstoque2,"\nReceitas:", arrayreceitas2)
console.log(nome3,"\nPreço:", preco3, "\nTem no estoque:", disponivelEmEstoque3,"\nReceitas:", arrayreceitas3)
console.log(nome4,"\nPreço:", preco4, "\nTem no estoque:", disponivelEmEstoque4,"\nReceitas:", arrayreceitas4)
console.log(nome5,"\nPreço:", preco5, "\nTem no estoque:", disponivelEmEstoque5,"\nReceitas:", arrayreceitas5)
console.log(nome6,"\nPreço:", preco6, "\nTem no estoque:", disponivelEmEstoque6,"\nReceitas:", arrayreceitas6)
console.log(nome7,"\nPreço:", preco7, "\nTem no estoque:", disponivelEmEstoque7,"\nReceitas:", arrayreceitas7)
console.log(nome8,"\nPreço:", preco8, "\nTem no estoque:", disponivelEmEstoque8,"\nReceitas:", arrayreceitas8)

//semana 2
//1)
objeto1 = {
    nome: "banana",
    preco: 3.70,
    disponivelEmEstoque: true,
    receitas: arrayreceitas1,
    // imagem: "/media/banana.jpg"
}

objeto2 = {
    nome: "melancia",
    preco: 4.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas2,
    // imagem: "/media/melancia.jpg"
}

objeto3 = {
    nome: "melão",
    preco: 6.00,
    disponivelEmEstoque: false,
    receitas: arrayreceitas3,
    // imagem: "/media/melao.jpg"
}

objeto4 = {
    nome: "limão",
    preco: 2.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas4,
    // imagem: "/media/limao.jpg"
}

objeto5 = {
    nome: "laranja",
    preco: 2.50,
    disponivelEmEstoque: false,
    receitas: arrayreceitas5,
    // imagem: "/media/laranja.jpeg"
}

objeto6 = {
    nome: "lichia",
    preco: 5.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas6,
    // imagem: "/media/lichia.jpg"
}

objeto7 = {
    nome: "morango",
    preco: 7.00,
    disponivelEmEstoque: true,
    receitas: arrayreceitas7,
    // imagem: "/media/morango.jpg"
}

objeto8 = {
    nome: "uva",
    preco: 6.00,
    disponivelEmEstoque: false,
    receitas: arrayreceitas8,
    // imagem: "/media/uva.png"
}
//2)
const arrayDeObjetos = []

//3)
arrayDeObjetos.push(objeto1, objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8)
console.log(arrayDeObjetos)

//4 e 5)

const novoArrayObjetos = []

if (objeto1.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto1)
} else {
    alert("Item 1 não adicionado")
}

if (objeto2.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto2)
} else {
    alert("Item 2 não adicionado")
}

if (objeto3.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto3)
} else {
    alert("Item 3 não adicionado")
}

if (objeto4.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto4)
} else {
    alert("Item 4 não adicionado")
}

if (objeto5.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto5)
} else {
    alert("Item 5 não adicionado")
}

if (objeto6.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto6)
} else {
    alert("Item 6 não adicionado")
}

if (objeto7.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto7)
} else {
    alert("Item 7 não adicionado")
}

if (objeto8.disponivelEmEstoque === true) {
    novoArrayObjetos.push(objeto8)
} else {
    alert("Item 8 não adicionado")
}

console.log(novoArrayObjetos)

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
    let stringObjeto = {}
    for(let i in objeto) {
        stringObjeto = stringObjeto + `${i} : ${objeto[i]}. \n`
    }
    console.log(stringObjeto)
    return
}

devolverStringDeObjeto(arrayDeObjetos[6])

// const devolverStringDeObjeto = (objeto) => {
//     console.log(`${objeto.nome.toUpperCase()}
// preço: ${objeto.preco}
// tem no estoque: ${objeto.disponivelEmEstoque}
// receitas: ${objeto.receitas}
//     `)
// }

// devolverStringDeObjeto(arrayDeObjetos[6])

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

