var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (e) => {
  e.preventDefault();

  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoForm(form);

  let erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMessagensDeErro(erros)
    return;
  }
  adicionaPaciente(paciente);

  form.reset();


  document.querySelector('#messagens-error').innerHTML = '';

});


function adicionaPaciente(paciente) {
  let pacienteTr = montaTr(paciente);

  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}


function exibeMessagensDeErro(erros) {
  const ul = document.querySelector("#messagens-error");
  ul.innerHTML = '';

  erros.forEach((erro) => {
    let li = document.createElement('li');

    li.textContent = erro;

    ul.appendChild(li);
  })

}

function obtemPacienteDoForm(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length == 0) { erros.push('O campo nome não pode ser vazio...'); }
  if (paciente.gordura.length == 0) { erros.push('O campo gordura não pode ficar em branco...') }
  if (paciente.peso.length == 0) { erros.push('O campo peso não pode ficar em branco...') }
  if (paciente.altura.length == 0) { erros.push('O campo altura não pode ficar em branco...') }

  if (!validaPeso(paciente.peso)) { erros.push('O peso é inválido!') };

  if (!validaAltura(paciente.altura)) { erros.push('Altura inválida!') };


  return erros;
}