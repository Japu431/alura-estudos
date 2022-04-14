import Cliente from "./models/cliente.js";
import ContaCorrente from "./models/ContaCorrente.js";

const cliente1 = new Cliente("Matheus", "111.222.333-44", "0001", 120.0);
console.log(cliente1);

const clienteMatheus = new ContaCorrente("0001");

clienteMatheus.DepositarSaldo(100);
clienteMatheus.SacarSaldo(200);
