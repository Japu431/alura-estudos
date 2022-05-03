const buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    // AJAX 
    xhr.addEventListener('load', function () {
        let errorAjax = document.querySelector('#erro-ajax')

        if (xhr.status == 200) {
            errorAjax.classList.add('invisivel');
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);
            console.log(pacientes);

            pacientes.forEach(paciente => {
                adicionaPaciente(paciente);
            })
        } else {
            errorAjax.classList.remove('invisivel');
            console.log(`${xhr.status}: ${xhr.responseText}`);
        }
    })
    xhr.send();
})  