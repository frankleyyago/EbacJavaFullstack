const formulario = document.getElementById('formulario')
const campoA = document.getElementById('campoA')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    const campoB = document.getElementById('campoB')
    const mensagemSucesso = `Campo A: ${campoA.value} e campo B: ${campoB.value} foram enviados com sucesso`
    const mensagemErro = `O campo B deve ser maior que o campo A`

    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        campoA.value = ''
        campoB.value = ''
        setTimeout(function() {
            containerMensagemSucesso.style.display = 'none'
        }, 2500)
    } else {
        document.querySelector('.error-message').style.display = 'block'
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
        setTimeout(function() {
            containerMensagemErro.style.display = 'none'
        }, 2500)
    }

})
