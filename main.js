// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-seach-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById('cep').value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open('GET', endpoint)
//         xhttp.send()
//     })
// })

$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-search-cep').click(function() {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const button = $(this)
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')
        
        // $.ajax(endpoint).done(function(answer) {
        //     const place = answer.place
        //     const neighborhood = answer.neighborhood
        //     const city = answer.city
        //     const state = answer.state
        //     const adress = `${place}, ${neighborhood} - ${city} - ${state}`
        //     $('adress').val(adress)
        
        //     setTimeout(function() {
        //         $(button).find('i').removeClass('d-none')
        //         $(button).find('span').addClass('d-none')
        //     }, 4000)
        // })

        fetch(endpoint)
        .then(function(answer) {
            return answer.json()
        }).then(function(json) {
            const place = json.place
            const neighborhood = json.neighborhood
            const city = json.city
            const state = json.state
            const adress = `${place}, ${neighborhood} - ${city} - ${state}`
            $('adress').val(adress)
        })
        .catch(function(erro) {
            alert("Error")
        })
        .finally(function() {
            setTimeout(function() {
                $(button).find('i').removeClass('d-none')
                $(button).find('span').addClass('d-none')
            }, 1000)
        })
    })

    $('#request-form').submit(function(e) {
        e.preventDefault()

        if ($('#nome').val().length == 0) {
            throw new Error('Digite o nome')
        }
    })
})