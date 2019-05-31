var botaoAdicionar = document.querySelector("#adicionar-tarefa");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var tarefa = obtemTarefasDoFormulario(form);

    var tarefa = adicionaTarefaNaTabela(tarefa);

    form.reset();


});

    function adicionaTarefaNaTabela(tarefa){


    var data = formataData(tarefa);

    var tarefaTr = montaTr(tarefa);

    var tabela = document.querySelector("#tabela-tarefa");

    tabela.appendChild(tarefaTr);

    }

   function obtemTarefasDoFormulario(form){

   var tarefa = {
            descricao: form.descricao.value,
            datatarefa : form.datatarefa.value,
            horario : form.horario.value,
            duracao : form.duracao.value,
            lembrete : form.lembrete.value,
            criacao : form.datatarefa.value,



        }



        return tarefa;
    }

    function formataData(tarefa){

        var data = new Date(tarefa.datatarefa);
        var current_date=data.getDate()+1;
        var month=data.getMonth()+1;
        var year = data.getFullYear();

        return data =""+current_date+"."+month+"."+year;


    }


    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.classList.add(classe);
        td.textContent = dado;

        return td;
    }

    function montaTr(tarefa){

        var tarefaTr = document.createElement("tr");
        tarefaTr.classList.add("tarefa");

        tarefaTr.appendChild(montaTd(tarefa.descricao, "info-descricao"));
        tarefaTr.appendChild(montaTd(formataData(tarefa), "info-datatarefa"));
        tarefaTr.appendChild(montaTd(tarefa.horario, "info-horario"));
        tarefaTr.appendChild(montaTd(tarefa.duracao, "info-duracao"));
        tarefaTr.appendChild(montaTd(tarefa.lembrete, "info-lembrete"));
        tarefaTr.appendChild(montaTd(formataData(tarefa), "info-criacao"));
        

             

        return tarefaTr;

      
    }


    



     