document.getElementById('consultaBtn').addEventListener('click', () => {
    const cep = document.getElementById('cepInput').value;
    
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    fetchCep(cep);
});

const fetchCep = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
            throw new Error('CEP não encontrado.');
        }

        displayResult(data);
    } catch (error) {
        document.getElementById('resultadoTexto').innerText = error.message;
    }
};

const displayResult = (data) => {
    const { logradouro, bairro, localidade, uf } = data;
    document.getElementById('resultadoTexto').innerText = `
        Logradouro: ${logradouro}
        Bairro: ${bairro}
        Cidade: ${localidade}
        Estado: ${uf}
    `;
};
