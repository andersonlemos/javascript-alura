var campoFiltro = document.querySelector("#filtrar-tabela");

<<<<<<< HEAD
campoFiltro.addEventListener("input", function () {
=======
campoFiltro.addEventListener("input", function() {
>>>>>>> 20441b6fb6d0e004448031e3c7b70d209d69e220
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
<<<<<<< HEAD
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            // Adição aqui
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
=======
            var paciente = pacientes[i];            
            paciente.classList.add("invisivel");    
>>>>>>> 20441b6fb6d0e004448031e3c7b70d209d69e220
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 20441b6fb6d0e004448031e3c7b70d209d69e220
