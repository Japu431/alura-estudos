var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;
  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;
  let tdIMC = paciente.querySelector(".info-imc");

  let pesoEhValido = validaPeso(peso);
  let alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdIMC.textContent = "Peso inválido!";
    pesoEhValido = false;
    // paciente.style.color = "red"
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValido) {
    console.log("Altura inválida!");
    tdIMC.textContent = "Altura inválida!";
    alturaEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValido) {
    let imc = calculaIMC(peso, altura);
    // invés de ficar 00.00000000000 ( numeros quebrados ) limita casas decimais
    tdIMC.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}


function calculaIMC(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
