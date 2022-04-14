class ContaCorrente {
  constructor(agencia) {
    this.agencia = agencia;
    this._saldo = 0;
  }

  DepositarSaldo(value) {
    if (value <= 0)
      return console.log(`Não tem como receber valor menor que 0 reais...`);

    this._saldo += value;
    return console.log(`Seu saldo é de ${this._saldo} reais`);
  }

  SacarSaldo(value) {
    if (this._saldo < value)
      return console.log(`Erro! Tentativa de sacar valor maior do que já tem!`);

    this._saldo -= value;
    return console.log(`Sucesso ao Sacar! Seu saldo é de ${this._saldo} reais`);
  }
}

export default ContaCorrente;
