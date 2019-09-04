//Autor: Caique Sousa

// Validação do Form
// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//recupera o arquivo buscado 
var file1 = document.getElementById("inputFile1");
file1.onchange = function () {
    if (file1.files.length > 0) {
        document.getElementById('filename1').innerHTML = file1.files[0].name;
    }
};

var file2 = document.getElementById("inputFile2");
file2.onchange = function () {
    if (file2.files.length > 0) {
        document.getElementById('filename2').innerHTML = file2.files[0].name;
    }
};