$(document).ready(function() {
    $('body button').click(function() {

    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefaCadastrada = $('#nova-tarefa').val()
        console.log(novaTarefaCadastrada)
        const novaTarefa = $('<li></li>')
        console.log(novaTarefa)
        novaTarefa.text(novaTarefaCadastrada)
        $(novaTarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })

        $('ul').on('click', 'li', function() {
            $(this).toggleClass('concluida')
        })
})