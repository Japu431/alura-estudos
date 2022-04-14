class ContaCorrente {
  constructor(agencia) {
    this.agencia = agencia;
    this.saldo = 0;
  }

  DepositarSaldo(value) {
    if(value > 0) {
      this.saldo += value;
      return console.log(`Seu saldo é de ${this.saldo} reais`);
    } else {
      return console.log(`Não tem como receber valor menor que 0 reais...`);
    }
  }

  SacarSaldo(value) {
    if (this.saldo < value) {
      console.log(`Erro! Tentativa de sacar valor maior do que já tem!`);
      return;
    } else {
      this.saldo -= value;
      return console.log(`Sucesso ao Sacar! Seu saldo é de ${this.saldo} reais`);
    }
  }
}

export default ContaCorrente;
