var buscar = document.querySelector("#buscar-pacientes");

buscar.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAJAX = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAJAX.classList.remove("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAJAX.classList.remove("invisivel");
        }
    });
    xhr.send();
})