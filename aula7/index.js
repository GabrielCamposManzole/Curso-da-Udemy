/*const nome = "João";
nome = "Maria"; // Isso causará um erro, pois 'nome' é uma constante
console.log(nome);
*/

const nome = "Gabriel";
const sobrenome = "Campos";
const idade = 28;
const peso = 75.5;
const altura = 1.8;
let imc;
let anoNascimento = 1997;

imc = peso / (altura * altura);

//console.log(nome +" "+ sobrenome + " tem " + idade +  " anos, pesa "  + peso + "kg e mede " + altura + " de altura e seu IMC é de " + imc +" "+ nome + " " + sobrenome + " nasceu em " + anoNascimento + ".");

console.log(
  `${nome} ${sobrenome} tem ${idade} anos \npesa ${peso} kg e mede ${altura} de altura e seu IMC é de ${imc} ${nome} ${sobrenome} nasceu em ${anoNascimento} .`
 );



