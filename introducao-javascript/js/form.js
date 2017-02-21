var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //Extraindo Informações do Paciente do form
  var paciente = obtemPacienteForm(form);


  var mensagemErro = document.querySelector("#mensagem-erro");
  if(!validaDados(paciente.nome, paciente.peso, paciente.altura, paciente.gordura)){
    mensagemErro.textContent = "Não foi possivel adicionar o paciente, dados inválidos!"
    return;
  }
  mensagemErro.textContent = "";
  adicionaPacienteNaTabela(paciente);
  form.reset();

})

function adicionaPacienteNaTabela(paciente) {
  //Cria tr e td do Paciente
  var pacienteTr = montaTr(paciente);
  //Add paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteForm(form) {
  var paciente = {
    nome : form.nome.value,
    peso : form.peso.value,
    altura : form.altura.value,
    gordura : form.gordura.value,
    imc : calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
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

}
