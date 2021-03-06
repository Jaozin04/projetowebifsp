export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="info_empresa">
        <p id="info_empresacnpj"></p>
        <p id="info_empresarazao"></p>
        <p id="info_empresafantasia"></p>
    </div>
        <div class="meu_perfil">
            <div class="perfis">
                <div id="user_empresa" class="user_empresa">
                    <p class="user">Minha empresa</p>
                    <div class="useropcoes_empresa" id="useropcoes_empresa">
                        <p class="useropcoes" onclick="cad_servico()">Criar Serviço</p>
                        <p class="useropcoes" onclick="servCadastrados()">Servicos Cadastrados</p>
                        <p class="useropcoes" onclick="orcamentoEmpresa()">Orçamentos</p>
                        <p class="useropcoes" onclick="osEmpresa()">Ordem de Serviços</p>
                        <p class="useropcoes" onclick="historico_clientes()">Historico</p>
                        <p class="useropcoes" onclick="infoEmpresa()">Informações da Empresa</p>
                    </div>
                </div>
                <p class="sair">sair</p>
            </div>
            <div class="conteudo_perfis">
                <div id="userempresa_conteudo" class="userempresa_conteudo">                
                    <div id="cad_servico" class="cad_servico">
                        <form>
                            <div class="quadro_cadservico">
                                <p>Informe o nome do serviço</p>
                                <input type="text">
                                <p>Informe a categoria do serviço</p>
                                <input type="text">
                                <p>Informe o custo minimo do serviço</p>
                                <input type="text">
                                <p>Informe o prazo minimo do serviço</p>
                                <input type="text">	
                                <p>Descrição do serviço</p>
                                <input type="text" placeholder="Descreva como o serviço é feito" required>
                            </div>
                            <button type="submit">cadastrar serviço</button>
                        </form>
                    </div>

                    <div id="servicos_cads" class="servicos_cads">
                        <div class="quadro_servicoscads">
                            <div class="quadros">
                                <p>Nome do serviço</p>
                                <p>Tipo: </p>
                                <p>Custo: </p>
                                <p>Prazo: </p>
                                <p>Descrição</p>
                            </div>
                            <div class="quadros">
                                <p>Nome do serviço</p>
                                <p>Tipo: </p>
                                <p>Custo: </p>
                                <p>Prazo: </p>
                                <p>Descrição</p>
                            </div>
                        </div>
                    </div>

                    <div id="orcamentos_empresa" class="orcamentos_empresa">
                        <div class="quadro_orcamentosempresa"> 
                            <p class="titulo_orc"> Orçamentos em aberto </p>
                            <div class="orc_aberto">
                                <div class="quadros">
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                    <p>Orçamento feito: 07/06/2022</p>
                                    <p>Respondido</p>
                                </div>
                                <div class="quadros">
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                    <p>Orçamento feito: 07/06/2022</p>
                                    <p>Respondido</p>
                                </div>
                            </div>
                            <p class="titulo_orc"> Orçamentos fechados </p>
                            <div class="orc_fechado">
                                <div class="quadros">
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                    <p>Orçamento feito: 07/06/2022</p>
                                    <p>Respondido</p>
                                </div>
                                <div class="quadros">
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                    <p>Orçamento feito: 07/06/2022</p>
                                    <p>Respondido</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="os_empresa" class="os_empresa">
                        <div class="quadros_osempresa">
                            <p class="titulo_os"> Ordem de serviço em aberto </p>
                            <div class="os_aberto">
                                <div class="quadros">
                                    <p>Número da OS: 01</p>
                                    <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                </div>
                                <div class="quadros">
                                    <p>Número da OS: 02</p>
                                    <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                </div>
                            </div>
                            <p class="titulo_os"> Ordem de serviço fechadas </p>
                            <div class="os_fechado">
                                <div class="quadros">
                                    <p>Número da OS: 01</p>
                                    <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                </div>
                                <div class="quadros">
                                    <p>Número da OS: 02</p>
                                    <p>Orçamento Feito 07/06/22 / Serviço entregue: 12/06/2022</p>
                                    <p>Consertatudo: Conserto de Micro-ondas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="historico_clientes" class="historico_clientes">
                        <button class="historico_clientes">Buscar historico de clientes</button>
                        <p class="historico_clientes">Obs: O historico de clientes será enviado ao e-mail informado</p>
                    </div>
        
                    <div id="contato_empresa" class="contato_empresa">
                        <div class="endereco">
                            <p>ENDEREÇO</p>
                            <div class="info_endereco">
                                <p>Rua das Laranjeiras, nº 564 Centro, Sorocaba - SP</p>
                            </div>
                            <button onclick="document.getElementById('modalmaior_endereco').style.display='flex'">alterar dados</button>
                        </div>
                        <div class="telefone">
                            <p>TELEFONE</p>
                            <div class="telefones">
                                <div class="info_telefone">
                                    <p>(15) 99632-8945 </p>
                                    <p>(15) 3279-1245 </p>
                                </div>
                            </div>
                            <button onclick="document.getElementById('modalmenor_telefone').style.display='flex'">alterar dados</button>
                        </div>
                    </div>    
                </div>
            </div>
        </div>    
    `;

	container.innerHTML = template;

    return container;
}