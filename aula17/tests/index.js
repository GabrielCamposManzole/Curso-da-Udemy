/*function saudacao(nome) {
  return `Bom dia, ${nome}!`;
}

const variavel = saudacao("João");
console.log(variavel);*/

/*function soma(a, b) {
  const resultado = a + b;
  return resultado;
}

const resultadoFuncao = soma();
console.log(soma(2,10));
*/


//const raiz =  n => n ** 0.5; //funcao Arrow function

const raiz = function (n) {     //funcao declarativa tradicional
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));
console.log(raiz(49));
console.log(raiz(64));
console.log(raiz(81));
console.log(raiz(100));
console.log(raiz(121));
console.log(raiz(144));
console.log(raiz(169));
console.log(raiz(196));
console.log(raiz(225));
console.log(raiz(256));
console.log(raiz(289));
console.log(raiz(324));