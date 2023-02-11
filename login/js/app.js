function clicar() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let ButtonSubmit = document.getElementById('submitButton');
    let result = document.getElementById('result');
    let enderecoEmail = email.value
    let senha = password.value

    if ((enderecoEmail == 'gabriel51@gmail.com') && (senha == '12345')) {
        result.innerHTML = 'login feito com sucesso!'
        result.style.border = '1px solid red'
        result.style.color = 'white'
        result.style.backgroundColor ='black'
        result.style.borderRadius = '10px'
        result.style.padding = '9px'
    } else {
        result.innerHTML = 'login ou senha incorretos.'
        result.style.border = '1px solid white'
        result.style.color = 'white'
        result.style.backgroundColor ='black'
        result.style.borderRadius = '10px'
        result.style.padding = '9px'
    }
}
