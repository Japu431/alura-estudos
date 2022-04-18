import Cliente from "./Cliente.js";

class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }

  set cliente(novoCliente) {
    if (novoCliente instanceof Cliente) return (this._cliente = novoCliente);
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

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
