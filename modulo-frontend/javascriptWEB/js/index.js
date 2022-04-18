var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;
  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;
  let tdIMC = paciente.querySelector(".info-imc");

  let pesoEhValido = true;
  let alturaEhValido = true;

  if (peso < 0 || peso >= 1000) {
    console.log("Peso inválido!");
    tdIMC.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if (altura < 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    tdIMC.textContent = "Altura inválida!";
    alturaEhValido = false;
  }

  if (pesoEhValido && alturaEhValido) {
    let imc = peso / (altura * altura);
    // invés de ficar 00.00000000000 ( numeros quebrados ) ele faz até 2 casas decimais
    tdIMC.textContent = imc.toFixed(2);
  }
}
