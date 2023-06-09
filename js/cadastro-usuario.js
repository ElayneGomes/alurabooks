async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertido = await consultaCEP.json();
        
        if (consultaCEPConvertido.error) {
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro')
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertido.localidade;
        logradouro.value = consultaCEPConvertido.logradouro;
        bairro.value = consultaCEPConvertido.bairro;
        estado.value = consultaCEPConvertido.uf;
        
        console.log(consultaCEPConvertido);        
        return consultaCEPConvertido;

    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(error);
    }

}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));




