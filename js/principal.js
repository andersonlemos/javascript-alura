var pacientes =  document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length;i++){
    var paciente = pacientes[i];
    
    var tdPeso =  paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso =  tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido= true;
    var alturaEhValida = true;

    if(peso<0){
        pesoEhValido = false;
        peso.textContent = "Peso Inválido!";
    }

    if(altura>2.00){
        alturaEhValida = false;
        altura.textContent = "Altura Inválida!";
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
         tdImc.textContent = imc.toFixed(2);   
    }else{
        paciente.classList.add("paciente-invalido");
    }

}
