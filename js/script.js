document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const campos = document.querySelectorAll('.required');

    function validarCampos() {
        let camposVazios = false;

        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                camposVazios = true;
            }
        });

        if (camposVazios) {
            alert("Por favor, preencha todos os campos obrigatórios.");
        } else {
            const dados = {
                nome: document.querySelector('[name="nome"]').value,
                email: document.querySelector('[name="replyto"]').value,
                comentarios: document.querySelector('textarea').value
            };

       
            alert(`Dados enviados com sucesso:\nNome: ${dados.nome}\nE-mail: ${dados.email}\nComentários: ${dados.comentarios}`);

      
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        validarCampos();
    });
});
