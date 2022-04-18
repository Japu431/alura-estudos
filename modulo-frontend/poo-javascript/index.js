import ContaCorrente from "./models/ContaCorrente.js";
import Cliente from "./models/Cliente.js";

const cliente1 = new Cliente();
cliente1.nome = "Matheus";
cliente1.cpf = "122.321.222-40";

const contaCorrenteMatheus = new ContaCorrente();
contaCorrenteMatheus.agencia = 122;
contaCorrenteMatheus.cliente = cliente1;
contaCorrenteMatheus.DepositarSaldo(300);
console.log(contaCorrenteMatheus);

/* ----------------------------------------- */

const cliente2 = new Cliente();
cliente2.nome = "Lucas";
cliente2.cpf = "123.321.222-50";

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.agencia = 302;
contaCorrenteLucas.cliente = cliente2;

console.log(contaCorrenteLucas);
contaCorrenteMatheus.transferir(150, contaCorrenteLucas);

console.log("-----------------------------------------");

console.log(contaCorrenteMatheus);
console.log(contaCorrenteLucas);

