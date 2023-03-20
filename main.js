const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')
    const mensagemSucesso = `Campo A: ${campoA.value} e campo B: ${campoB.value} foram enviados com sucesso`
    const mensagemErro = `O campo B deve ser maior que o campo A`
    if (parseInt(campoB.value) > parseInt(campoA.value)) {
        formulario.submit()
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    } else {
        campoA.style.border = '2px solid red'
        document.querySelector('.error-message').style.display = 'block'
        const containerMensagemErro = document.querySelector('.error-message')
        containerMensagemErro.innerHTML = mensagemErro
        containerMensagemErro.style.display = 'block'
    }
})

console.log(formulario)