var paciente = document.querySelector("#primeiro-paciente");
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var tdImc = paciente.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if(peso<=0){
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}
if (altura>=3){
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
}

if(alturaEhValida && pesoEhValido){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
}


