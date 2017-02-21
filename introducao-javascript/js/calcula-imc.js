var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  var tdNome = paciente.querySelector(".info-nome");
  var tdGordura = paciente.querySelector(".info-gordura");
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var nome = tdNome.textContent;
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var gordura = tdGordura.textContent;

  if (validaDados(nome, peso, altura, gordura)) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  } else {
    tdImc.textContent = "Altura ou Peso inválido!";
    paciente.classList.add("paciente-invalido")
  }
}

function validaDados(nome, peso, altura, gordura){
  if (nome.length > 0 && peso > 0 && peso < 300 && altura > 0 && altura < 3 && gordura.length > 0) {
    return true;
  } else {
    return false;
  }

}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
