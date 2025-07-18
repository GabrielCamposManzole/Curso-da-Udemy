const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = ``;
texto.innerHTML += `<p>Raiz quadrada é ${Math.sqrt(numero)}. </p>`;
texto.innerHTML += `<p>Seu número é ${numero} e ele é inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>Seu número é ${numero} e ele é NaN: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando seu número para baixo, temos ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando seu número para cima, temos ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando seu número, temos ${Math.round(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais, seu número fica ${numero.toFixed(2)}. </p>`;
texto.innerHTML += `<p>O tipo de dado do seu número é ${typeof numero}. </p>`;
