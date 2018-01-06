var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        tdImc.textContent = "Peso Inválido!";
    }

    if (!alturaEhValida) {
        tdImc.textContent = "Altura Inválida!";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        paciente.classList.add("paciente-invalido");
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    }
    return false;
}