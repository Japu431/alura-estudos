class ContaCorrente {
  agencia;
  cliente;
  _saldo = 0;

  DepositarSaldo(value) {
    if (value <= 0) return value;

    this._saldo += value;
    return this._saldo;
  }

  SacarSaldo(value) {
    if (this._saldo < value) return;

    this._saldo -= value;
    return this._saldo;
  }

  transferir(value, conta) {
    const valorSacado = this.SacarSaldo(value);
    conta.DepositarSaldo(valorSacado);
  }
}

export default ContaCorrente;
