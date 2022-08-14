function VerificarEntrada() {
    NomeConvidado = document.getElementById('name').value;
    ConvidadosInacio = ['Luis', 'Isaias', 'Peterson', 'Kaba']
    if (ConvidadosInacio.includes(NomeConvidado)) {
        document.getElementById('Permissao').innerText = 'Você pode entrar'
    } else {
        document.getElementById('Permissao').innerText = 'Você não pode entrar'
    }
}