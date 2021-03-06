async function perfilCliente() {
    const token = localStorage.getItem('token');
    console.log(token)
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url, {
                method: 'GET',
                mode:"no-cors",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true'
                  }
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
    doGet('http://localhost:5000/buscarusuario').then(console.log).catch(console.error);

	const result = await fetch ('http://localhost:5000/buscarusuario');
	const buscarusuario = await result.json();

    const nome = `<p > Nome: ${buscarusuario.nome} </p>`;
    const email = `<p> E-mail: ${buscarusuario.email} </p`;
    const cpf = `<p> CPF: ${buscarusuario.cpf} </p>`;

    document.getElementById('info_usernome').insertAdjacentHTML('afterbegin',nome);
    document.getElementById('info_useremail').insertAdjacentHTML('afterbegin',email);
    document.getElementById('info_usercpf').insertAdjacentHTML('afterbegin',cpf);
}

async function osCliente() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet(`https://rickandmortyapi.com/api/episode/5`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const num_os = `<p> Número da OS: ${episode.name}</p>`
    const data_os = `<p> Data ordem serviço: ${episode.name}</p`;

    document.getElementById('num_os').insertAdjacentHTML('afterbegin',num_os);
    document.getElementById('data_os').insertAdjacentHTML('afterbegin',data_os);

    function os_cliente(){
        let os_cliente = document.getElementById('os_cliente');
        if(document.getElementById('os_cliente')){
            os_cliente.style.display='flex';
            document.getElementById('orcamentos_cliente').style.display='none';
            document.getElementById('contato_cliente').style.display='none';
            document.getElementById('trocar_senha').style.display='none';
            document.getElementById('criar_empresa').style.display='none';
        }
    }
    os_cliente();
}

async function orcamentoCliente() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet('https://rickandmortyapi.com/api/episode/5').then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const nome_servico = `<p> Nome Servico: ${episode.name} </p>`;
    const data_orc = `<p> Orçamento feito: ${episode.name} </p`;
    const status_orc = `<p> Status: ${episode.name} </p>`;

    document.getElementById('nome_servico').insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById('data_orc').insertAdjacentHTML('afterbegin',data_orc);
    document.getElementById('status_orc').insertAdjacentHTML('afterbegin',status_orc);

    function orc_cliente(){
        let orc_cliente = document.getElementById('orcamentos_cliente');
        if(document.getElementById('orcamentos_cliente')){
            orc_cliente.style.display='flex';
            document.getElementById('os_cliente').style.display='none';
            document.getElementById('contato_cliente').style.display='none';
            document.getElementById('trocar_senha').style.display='none';
            document.getElementById('criar_empresa').style.display='none';
        }
    }
    orc_cliente();
}

async function infoPessoais(){
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet(`https://rickandmortyapi.com/api/episode/4`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/4`);
	const episode = await result.json();
	console.log(episode.name);

    const rua = `<p> Rua:${episode.name}, nº ${episode.name}, bairro ${episode.name}, cidade ${episode.name}, estado ${episode.name}</p>`;
    const telefone1 = `<p> Telefone 1: ${episode.name}`;
    const telefone2 = `<p> Telefone 2: ${episode.name}`;

    document.getElementById('rua').insertAdjacentHTML('afterbegin',rua);
    document.getElementById('telefone1').insertAdjacentHTML('afterbegin',telefone1);
    document.getElementById('telefone2').insertAdjacentHTML('afterbegin',telefone2);

    function contato_cliente(){
        let contato_cliente = document.getElementById('contato_cliente');
        if(document.getElementById('contato_cliente')){
            contato_cliente.style.display='flex';
            document.getElementById('orcamentos_cliente').style.display='none';
            document.getElementById('os_cliente').style.display='none';
            document.getElementById('trocar_senha').style.display='none';
            document.getElementById('criar_empresa').style.display='none';
        }
    }
    contato_cliente();
}


async function perfilEmpresa() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet(`https://rickandmortyapi.com/api/episode/7`).then(console.log).catch(console.error);

	const result = await fetch (`https://rickandmortyapi.com/api/episode/7`);
	const episode = await result.json();
	console.log(episode.name);

    const cnpj = `<p > CNPJ: ${episode.name} </p>`;
    const razao_social= `<p> Razão Social: ${episode.name} </p`;
    const nome_fantasia = `<p> Nome fantasia: ${episode.name} </p>`;

    document.getElementById('info_empresacnpj').insertAdjacentHTML('afterbegin',cnpj);
    document.getElementById('info_empresarazao').insertAdjacentHTML('afterbegin',razao_social);
    document.getElementById('info_empresafantasia').insertAdjacentHTML('afterbegin',nome_fantasia);

}

async function servCadastrados(){

    function servicos_cads(){
        let servicos_cads = document.getElementById('servicos_cads');
        if(document.getElementById('servicos_cads')){
            servicos_cads.style.display='flex';
            document.getElementById('cad_servico').style.display='none';
            document.getElementById('orcamentos_empresa').style.display='none';
            document.getElementById('os_empresa').style.display='none';
            document.getElementById('historico_clientes').style.display='none';
            document.getElementById('contato_empresa').style.display='none';
        }
    }
    servicos_cads();
}

async function osEmpresa() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet(`https://rickandmortyapi.com/api/episode/5`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const num_os = `<p> Número da OS: ${episode.name}</p>`
    const data_os = `<p> Data ordem serviço: ${episode.name}</p`;

    document.getElementById('num_os').insertAdjacentHTML('afterbegin',num_os);
    document.getElementById('data_os').insertAdjacentHTML('afterbegin',data_os);

    function os_empresa(){
        let os_empresa = document.getElementById('os_empresa');
        if(document.getElementById('os_empresa')){
            os_empresa.style.display='flex';
            document.getElementById('servicos_cads').style.display='none';
            document.getElementById('cad_servico').style.display='none';
            document.getElementById('orcamentos_empresa').style.display='none';
            document.getElementById('historico_clientes').style.display='none';
            document.getElementById('contato_empresa').style.display='none';
        }
    }
    os_empresa();
}

async function orcamentoEmpresa() {
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet('https://rickandmortyapi.com/api/episode/5').then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/5`);
	const episode = await result.json();
	console.log(episode.name);

    const nome_servico = `<p> Nome Servico: ${episode.name} </p>`;
    const data_orc = `<p> Orçamento feito: ${episode.name} </p`;
    const status_orc = `<p> Status: ${episode.name} </p>`;

    document.getElementById('nome_servico').insertAdjacentHTML('afterbegin',nome_servico);
    document.getElementById('data_orc').insertAdjacentHTML('afterbegin',data_orc);
    document.getElementById('status_orc').insertAdjacentHTML('afterbegin',status_orc);

    function orc_empresa(){
        let orc_empresa = document.getElementById('orcamentos_empresa');
        if(document.getElementById('orcamentos_empresa')){
            orc_empresa.style.display='flex';
            document.getElementById('servicos_cads').style.display='none';
            document.getElementById('cad_servico').style.display='none';
            document.getElementById('os_empresa').style.display='none';
            document.getElementById('historico_clientes').style.display='none';
            document.getElementById('contato_empresa').style.display='none';
        }
    }
    orc_empresa();
}

async function infoEmpresa(){
    const doGet = (url) => {
        const promisseCallback = (resolve, reject) => {
            fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
                return response.json();
            })
            .then(resolve)
            .catch(reject);
        }
        return new Promise(promisseCallback);
    }
    doGet(`https://rickandmortyapi.com/api/episode/4`).then(console.log).catch(console.error);

    const result = await fetch (`https://rickandmortyapi.com/api/episode/4`);
	const episode = await result.json();
	console.log(episode.name);

    const rua = `<p> Rua:${episode.name}, nº ${episode.name}, bairro ${episode.name}, cidade ${episode.name}, estado ${episode.name}</p>`;
    const telefone1 = `<p> Telefone 1: ${episode.name}`;
    const telefone2 = `<p> Telefone 2: ${episode.name}`;

    document.getElementById('rua').insertAdjacentHTML('afterbegin',rua);
    document.getElementById('telefone1').insertAdjacentHTML('afterbegin',telefone1);
    document.getElementById('telefone2').insertAdjacentHTML('afterbegin',telefone2);

    
function contato_empresa(){
    let contato_empresa = document.getElementById('contato_empresa');
    if(document.getElementById('contato_empresa')){
        contato_empresa.style.display='flex';
        document.getElementById('servicos_cads').style.display='none';
        document.getElementById('cad_servico').style.display='none';
        document.getElementById('orcamentos_empresa').style.display='none';
        document.getElementById('os_empresa').style.display='none';
        document.getElementById('historico_clientes').style.display='none';
    }
}
    contato_empresa();
}

