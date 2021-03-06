async function listaServico() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url, {
                method: 'GET',
                mode:"cors",
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'}
            })
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    
    doGet('http://127.0.0.1:5000/buscarservicos').then(console.log).catch(console.error);

    const result = await fetch ('http://127.0.0.1:5000/buscarservicos');
	const buscarservico = await result.json();

    const nome_servico = `<p > Nome do serviço: ${buscarservico.nome} </p>`;
    const tipo = `<p> Categoria: ${buscarservico.tipo} </p`;
    const custo= `<p> ${buscarservico.custo} </p>`;
    const prazo = `<p> Prazo: ${buscarservico.prazo} </p>`;
    const descricao = `<p> ${buscarservico.descricao} </p`;

    document.getElementById('nome_servico').insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',tipo);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',custo);
    document.getElementById("opcoes_servicos").insertAdjacentHTML('afterbegin',prazo);
    document.getElementById("descricao").insertAdjacentHTML('afterbegin',descricao);
}