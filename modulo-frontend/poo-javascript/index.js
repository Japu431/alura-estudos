import ContaCorrente from "./models/ContaCorrente.js";
import Cliente from "./models/Cliente.js";

const cliente1 = new Cliente("Matheus", "122.321.222-40");
const contaCorrenteMatheus = new ContaCorrente(122, cliente1);
contaCorrenteMatheus.DepositarSaldo(300);

/* ----------------------------------------- */

const cliente2 = new Cliente("Lucas", "123.321.222-50");
const contaCorrenteLucas = new ContaCorrente(302, cliente2);
contaCorrenteMatheus.transferir(150, contaCorrenteLucas);

console.log("-----------------------------------------");

console.log(contaCorrenteMatheus);
console.log(contaCorrenteLucas);

console.log(ContaCorrente.numeroDeContas);
