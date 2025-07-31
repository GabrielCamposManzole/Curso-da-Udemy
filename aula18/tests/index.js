const pessoa = {
  nome: "Gabriel",
  sobrenome: "Campos",
  idade: 28,

  fala() {
    console.log(
      `${this.nome} ${this.sobrenome} está falando oi... ${this.idade} anos`
    );
  },

  incrementaIdade() {
    this.idade++;
  },
};
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
