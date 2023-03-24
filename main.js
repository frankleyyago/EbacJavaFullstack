$(document).ready(function() {
    $('body button').click(function() {

    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const novaTarefaCadastrada = $('#nova-tarefa').val()
        console.log(novaTarefaCadastrada)
        const novaTarefa = $('<li></li>')
        console.log(novaTarefa)
        $(`${novaTarefaCadastrada}`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })
})