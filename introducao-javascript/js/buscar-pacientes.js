var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erro = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      erro.classList.add("esconder");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    } else {
        erro.classList.remove("esconder");
        erro.classList.add("mensagem-erro");
        erro.textContent = "Erro ao buscar pacientes. Erro " + xhr.status;
    }

  });

  xhr.send();
})
