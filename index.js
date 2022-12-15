const nome1 = "banana";
const preco1 = 3.7;
const disponivelEmEstoque1 = true;

const nome2 = "melancia";
const preco2 = 4.0;
const disponivelEmEstoque2 = true;

const nome3 = "melão";
const preco3 = 6.0;
const disponivelEmEstoque3 = false;

const nome4 = "limão";
const preco4 = 2.0;
const disponivelEmEstoque4 = true;

const nome5 = "laranja";
const preco5 = 2.5;
const disponivelEmEstoque5 = false;

const nome6 = "lichia";
const preco6 = 5.0;
const disponivelEmEstoque6 = true;

const nome7 = "morango";
const preco7 = 7.0;
const disponivelEmEstoque7 = true;

const nome8 = "uva";
const preco8 = 4.5;
const disponivelEmEstoque8 = false;

const precoMedio =
  (preco1 + preco2 + preco3 + preco4 + preco5 + preco6 + preco7 + preco8) / 8;
console.log(`O preço médio é: ${precoMedio.toFixed(2)}`);

const temNoEstoque =
  disponivelEmEstoque1 &&
  disponivelEmEstoque2 &&
  disponivelEmEstoque3 &&
  disponivelEmEstoque4 &&
  disponivelEmEstoque5 &&
  disponivelEmEstoque6 &&
  disponivelEmEstoque7 &&
  disponivelEmEstoque8;
console.log(`A verificação é: ${temNoEstoque}`);

const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"];

const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"];

const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " mousse"];

const arrayreceitas4 = ["mousse", " bolo", " caipirinha", " limonada suiça"];

const arrayreceitas5 = ["bolo", " suco", " pudim", " doce com calda"];

const arrayreceitas6 = ["cupcake", " sorvete", " caipirinha", " ceviche"];

const arrayreceitas7 = ["torta", " bolo", " fondue", " geleia"];

const arrayreceitas8 = ["geleia", " pavê", " beijinho", " bombom"];

console.log(
  nome1,
  "\nPreço:",
  preco1,
  "\nTem no estoque:",
  disponivelEmEstoque1,
  "\nReceitas:",
  arrayreceitas1
);
console.log(
  nome2,
  "\nPreço:",
  preco2,
  "\nTem no estoque:",
  disponivelEmEstoque2,
  "\nReceitas:",
  arrayreceitas2
);
console.log(
  nome3,
  "\nPreço:",
  preco3,
  "\nTem no estoque:",
  disponivelEmEstoque3,
  "\nReceitas:",
  arrayreceitas3
);
console.log(
  nome4,
  "\nPreço:",
  preco4,
  "\nTem no estoque:",
  disponivelEmEstoque4,
  "\nReceitas:",
  arrayreceitas4
);
console.log(
  nome5,
  "\nPreço:",
  preco5,
  "\nTem no estoque:",
  disponivelEmEstoque5,
  "\nReceitas:",
  arrayreceitas5
);
console.log(
  nome6,
  "\nPreço:",
  preco6,
  "\nTem no estoque:",
  disponivelEmEstoque6,
  "\nReceitas:",
  arrayreceitas6
);
console.log(
  nome7,
  "\nPreço:",
  preco7,
  "\nTem no estoque:",
  disponivelEmEstoque7,
  "\nReceitas:",
  arrayreceitas7
);
console.log(
  nome8,
  "\nPreço:",
  preco8,
  "\nTem no estoque:",
  disponivelEmEstoque8,
  "\nReceitas:",
  arrayreceitas8
);

objeto1 = {
  nome: "Banana",
  preco: 3.7,
  disponivelEmEstoque: true,
  receitas: arrayreceitas1,
  imagem: "/media/banana.jpg",
};

objeto2 = {
  nome: "Melancia",
  preco: 4.0,
  disponivelEmEstoque: true,
  receitas: arrayreceitas2,
  imagem: "/media/melancia.jpg",
};

objeto3 = {
  nome: "Melão",
  preco: 6.0,
  disponivelEmEstoque: false,
  receitas: arrayreceitas3,
  imagem: "/media/melao.jpg",
};

objeto4 = {
  nome: "Limão",
  preco: 2.0,
  disponivelEmEstoque: true,
  receitas: arrayreceitas4,
  imagem: "/media/limao.jpg",
};

objeto5 = {
  nome: "Laranja",
  preco: 2.5,
  disponivelEmEstoque: false,
  receitas: arrayreceitas5,
  imagem: "/media/laranja.jpeg",
};

objeto6 = {
  nome: "Lichia",
  preco: 5.0,
  disponivelEmEstoque: true,
  receitas: arrayreceitas6,
  imagem: "/media/lichia.jpg",
};

objeto7 = {
  nome: "Morango",
  preco: 7.0,
  disponivelEmEstoque: true,
  receitas: arrayreceitas7,
  imagem: "/media/morango.jpg",
};

objeto8 = {
  nome: "Uva",
  preco: 6.0,
  disponivelEmEstoque: false,
  receitas: arrayreceitas8,
  imagem: "/media/uva.png",
};
const arrayDeObjetos = [];

arrayDeObjetos.push(
  objeto1,
  objeto2,
  objeto3,
  objeto4,
  objeto5,
  objeto6,
  objeto7,
  objeto8
);
console.log(arrayDeObjetos);

const novoArrayObjetos = [];

if (objeto1.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto1);
} else {
  console.log("Item 1 não adicionado");
}

if (objeto2.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto2);
} else {
  console.log("Item 2 não adicionado");
}

if (objeto3.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto3);
} else {
  console.log("Item 3 não adicionado");
}

if (objeto4.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto4);
} else {
  console.log("Item 4 não adicionado");
}

if (objeto5.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto5);
} else {
  console.log("Item 5 não adicionado");
}

if (objeto6.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto6);
} else {
  console.log("Item 6 não adicionado");
}

if (objeto7.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto7);
} else {
  console.log("Item 7 não adicionado");
}

if (objeto8.disponivelEmEstoque === true) {
  novoArrayObjetos.push(objeto8);
} else {
  console.log("Item 8 não adicionado");
}

console.log(novoArrayObjetos);

const refatoracao = arrayDeObjetos.map((objeto) => {
  console.log(`${objeto.nome.toUpperCase()}
preço: ${objeto.preco}
tem no estoque: ${objeto.disponivelEmEstoque}
receitas: ${objeto.receitas}
`);
});

const devolverStringDeObjeto = (objeto) => {
  let stringObjeto = {};
  for (let i in objeto) {
    stringObjeto = stringObjeto + `${i} : ${objeto[i]}. \n`;
  }
  console.log(stringObjeto);
  return;
};

devolverStringDeObjeto(arrayDeObjetos[6]);

const receberArrayDeObjetos = (arrayDeObjetos, stringAleatoria) => {
  const resultado = arrayDeObjetos.filter((objeto) => {
    return objeto.nome === stringAleatoria;
  });

  if (resultado.length > 0) {
    console.log(resultado);
  } else {
    console.log();("nenhum item encontrado");
  }
};

receberArrayDeObjetos(arrayDeObjetos, "banana");

const valoresObjeto = ["Preço", "Disponível em estoque", "Receitas"];
let lista = document.getElementsByClassName("descricao");

let c = 0;
for (let i in objeto1) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c]}: ${objeto1[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[0].insertAdjacentElement("beforeend", linha);
    c++;
  }
}

let c1 = 0;
for (let i in objeto2) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c1]}: ${objeto2[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[1].insertAdjacentElement("beforeend", linha);
    c1++;
  }
}

let c2 = 0;
for (let i in objeto3) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c2]}: ${objeto3[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[2].insertAdjacentElement("beforeend", linha);
    c2++;
  }
}

let c3 = 0;
for (let i in objeto4) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c3]}: ${objeto4[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[3].insertAdjacentElement("beforeend", linha);
    c3++;
  }
}

let c4 = 0;
for (let i in objeto5) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c4]}: ${objeto5[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[4].insertAdjacentElement("beforeend", linha);
    c4++;
  }
}

let c5 = 0;
for (let i in objeto6) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c5]}: ${objeto6[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[5].insertAdjacentElement("beforeend", linha);
    c5++;
  }
}

let c6 = 0;
for (let i in objeto7) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c6]}: ${objeto7[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[6].insertAdjacentElement("beforeend", linha);
    c6++;
  }
}

let c7 = 0;
for (let i in objeto8) {
  if (i !== "nome" && i !== "imagem") {
    let linha = document.createElement("li");
    const conteudoNovo = document.createTextNode(
      `${valoresObjeto[c7]}: ${objeto8[i]}`
    );
    linha.appendChild(conteudoNovo);
    lista[7].insertAdjacentElement("beforeend", linha);
    c7++;
  }
}

for (let i in arrayDeObjetos) {
  let titulo = document.getElementsByClassName("div-descricao");
  const criarTagH = document.createElement("h2");
  const novoConteudo = document.createTextNode(arrayDeObjetos[i].nome);
  criarTagH.appendChild(novoConteudo);
  titulo[i].insertAdjacentElement("afterbegin", criarTagH);
}

let input = document.getElementById("search");
const divImagem = document.querySelector(".div-imagem");
const descricao = document.querySelector(".descricao");
const divDescricao = document.querySelector(".div-descricao");
const itensContainer = document.querySelector(".itens-container");

const removerFruta1 = document.querySelector("#removerFruta1");
const paiFruta1 = removerFruta1.parentNode;
const removerFruta2 = document.querySelector("#removerFruta2");
const paiFruta2 = removerFruta2.parentNode;
const removerFruta3 = document.querySelector("#removerFruta3");
const paiFruta3 = removerFruta3.parentNode;
const removerFruta4 = document.querySelector("#removerFruta4");
const paiFruta4 = removerFruta4.parentNode;
const removerFruta5 = document.querySelector("#removerFruta5");
const paiFruta5 = removerFruta5.parentNode;
const removerFruta6 = document.querySelector("#removerFruta6");
const paiFruta6 = removerFruta6.parentNode;
const removerFruta7 = document.querySelector("#removerFruta7");
const paiFruta7 = removerFruta7.parentNode;
const removerFruta8 = document.querySelector("#removerFruta8");
const paiFruta8 = removerFruta8.parentNode;

function buscar() {
  if (objeto1.nome === input.value) {
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto2.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto3.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto4.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto5.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto6.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta7.removeChild(removerFruta7);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto7.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta8.removeChild(removerFruta8);
    input.value = "";
  } else if (objeto8.nome === input.value) {
    paiFruta1.removeChild(removerFruta1);
    paiFruta2.removeChild(removerFruta2);
    paiFruta3.removeChild(removerFruta3);
    paiFruta4.removeChild(removerFruta4);
    paiFruta5.removeChild(removerFruta5);
    paiFruta6.removeChild(removerFruta6);
    paiFruta7.removeChild(removerFruta7);
    input.value = "";
  } else {
    alert("Nunhuma fruta encontrada");
  }
}

function devolveItem() {
  if (input.value === "") {
    paiFruta1.appendChild(removerFruta1);
    paiFruta2.appendChild(removerFruta2);
    paiFruta3.appendChild(removerFruta3);
    paiFruta4.appendChild(removerFruta4);
    paiFruta5.appendChild(removerFruta5);
    paiFruta6.appendChild(removerFruta6);
    paiFruta7.appendChild(removerFruta7);
    paiFruta8.appendChild(removerFruta8);
  }
}
