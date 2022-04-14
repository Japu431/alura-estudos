import Cliente from "./models/Cliente.js";
import ContaCorrente from "./models/ContaCorrente.js";

const cliente1 = new Cliente("Matheus", "111.222.333-44");
console.log(cliente1);

const clienteMatheus = new ContaCorrente("0001");
clienteMatheus.DepositarSaldo(250);
clienteMatheus.SacarSaldo(200);
