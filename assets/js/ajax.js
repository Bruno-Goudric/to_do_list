botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://5c827a662d2ad30014be51da.mockapi.io/tarefas");

    xhr.addEventListener("load", function() {

    	var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
        	erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var tarefas = JSON.parse(resposta);

            tarefas.forEach(function(tarefa) {
                adicionaTarefaNaTabela(tarefa);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            // erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});