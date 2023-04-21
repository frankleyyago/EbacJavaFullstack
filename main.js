document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest()
        const cep = document.getElementById('cep').value
        const endpoint = `https://viacep.com.br/ws/${cep}/json`

        xhttp.open('GET', endpoint)
        xhttp.send()
    })
})

// $(document).ready(function() {
//     $('#btn-search-cep').click(function() {
//         const cep = $('#cep').val()
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         $.ajax(endpoint).done(function(answer) {
//             const place = answer.place
//             const neighborhood = answer.neighborhood
//             const city = answer.city
//             const state = answer.state
//             const adress = `${place}, ${neighborhood} - ${city} - ${state}`
//             $('adress').val(adress)
//         })
//     })
// })