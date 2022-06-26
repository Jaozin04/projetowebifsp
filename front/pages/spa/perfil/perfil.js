export default () => {
    const container = document.createElement('div');

    const template = `
    <div class="meu_perfil">
        <div class="perfis">
            <div id="user_cliente" onclick="cliente()" class="user_cliente">
                <p class="user">Meu perfil</p>
                <div class="useropcoes_cliente" id="useropcoes_cliente">
                    <p class="useropcoes" onclick="os_cliente()">Ordem de Serviço</p>
                    <p class="useropcoes" onclick="orc_cliente()">Orçamentos</p>
                    <p class="useropcoes" onclick="contato_cliente()">Informações Pessoais</p>
                    <p class="useropcoes" onclick="trocar_senha()">Trocar senha</p>
                </div>
            </div>

            <div class="user">
                <p class="user" onclick="criar_empresa()">Quero ter a minha empresa</p>
            </div>

            <div id="user_empresa" onclick="empresa()" class="user_empresa">
                <p class="user">Minha empresa</p>
                <div class="useropcoes_empresa" id="useropcoes_empresa">
                    <p class="useropcoes" onclick="cad_servico()">Criar Serviço</p>
                    <p class="useropcoes" onclick="servicos_cads()">Servicos Cadastrados</p>
                    <p class="useropcoes" onclick="orc_empresa()">Orçamentos</p>
                    <p class="useropcoes" onclick="os_empresa()">Ordem de Serviços</p>
                    <p class="useropcoes" onclick="historico_clientes()">Historico</p>
                    <p class="useropcoes" onclick="contato_empresa()">Informações da Empresa</p>
                </div>
            </div>
            <p class="sair">sair</p>
        </div>

        <div class="conteudo_perfis">
            <div class="info_usercomum">
                <p> Nome: João Pedro de Almeida </p>
                <p> E-mail: almeiida.joao@gmail.com </p>
                <p> CPF: 123.456.789-00 </p>
            </div>
            <div id="usercliente_conteudo" class="usercliente_conteudo">
                <div id="os_cliente" class="os_cliente">
                    <div class="quadros_oscliente">
                        <div class="quadros">
                            <p>Número da OS: 01</p>
                            <p>Orçamento Feito 07/06/2022</p>
                            <p>Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                        <div class="quadros">
                            <p>Número da OS: 02</p>
                            <p>Orçamento Feito 07/06/2022</p>
                            <p>Serviço entregue: 12/06/2022</p>
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                        </div>
                    </div>
                    <p class="vermais">Ver mais...</p>
                </div>
                <div id="orcamentos_cliente" class="orcamentos_cliente">
                    <div class="quadro_orcamentoscliente">
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Pendente</p>
                        </div>
                        <div class="quadros">
                            <p>Consertatudo: Conserto de Micro-ondas</p>
                            <p>Orçamento feito: 07/06/2022</p>
                            <p>Respondido</p>
                        </div>
                    </div>
                    <p class="vermais">Ver mais...</p>
                </div>
                <div id="contato_cliente" class="contato_cliente">
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
                <div class="trocar_senha" id="trocar_senha">
                    <p>Crie uma nova senha</p>
                    <div class="inserir_senha">
                        <input type="password" placeholder="Insira nova uma senha" required>
					    <input type="password" placeholder="Insira sua senha novamente" required>
                    </div>
                    <button>Criar nova senha</button>
                </div>
            </div>

            <div id="criar_empresa" class="criar_empresa">
                <form>
					<div class="quadro_cadloginempresa">
						<div class="criar_infoempresa">
							<b>Informe seu CNPJ</b>
							<input class="emailsenha" type="text" placeholder="Insira o seu cnpj" required>
							<b>Informe a Razão Social da empresa</b>
							<input class="emailsenha" type="text" placeholder="Insira o seu razão social" required>
							<b>Informe o Nome Fantasia da empresa</b>
							<input class="emailsenha" type="text" placeholder="Insira o seu nome fantasia" required>
						</div>
						<div class="criar_endereco">
							<div class="ruanumero">
								<div>
									<b>Rua</b>
									<input class="rua" type="text" placeholder="Insira sua rua" required>		
								</div>
								<div>
									<b>Número</b>
									<input class="num" type="text" required>
								</div>
							</div>
							<div class="bairrocidadeestado">
								<div>
									<b>Bairro</b>
									<input class="bairro" type="text" placeholder="Insira seu bairro" required>
								</div>
								<div>
									<b>Cidade</b>
									<input class="cidade" type="text" placeholder="Insira sua cidade" required>
								</div>
								<div>
									<b>Estado</b>
									<input class="estado" type="text" required>
								</div>
							</div>
							<div class="criar_telefone">
								<div>
									<b>Tel. Pessoal</b>
									<input class="input_telefone" type="text" required>
								</div>
								<div>
									<b>Tel. Residencial</b>
									<input class="input_telefone" type="text" required>
								</div>
							</div>
						</div>
					</div>
                    <div>
					    <button type="submit">CRIAR CONTA</button>
				    </div>
				</form>
            </div>

            <div id="userempresa_conteudo" class="userempresa_conteudo">                
                <div class="info_empresa">
                    <p> CNPJ: 12.345.678/0001-00 </p>
                    <p> Razao Social: MCDONALDIS CIA </p>
                    <p> Nome Fantasia: BURGUERQUINGUE </p>
                </div>
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
                    <p class="vermais">Ver mais...</p>
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
                        <p class="vermais">Ver mais...</p>
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
                        <p class="vermais">Ver mais...</p>                        
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
                        <p class="vermais">Ver mais...</p>
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
                        <p class="vermais">Ver mais...</p>
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

    <div id="alterar_endereco">
		<div class="modalmaior_endereco" id="modalmaior_endereco">
			<div class="conteudo_modalmaior">
				<p class="fechar" onclick="document.getElementById('modalmaior_endereco').style.display='none'">x</p>
				<form>
					<div class="quadro_endereco">
						<div>
                            <b>Rua</b>
						    <input class="emailsenha" type="text" required>
                            <b>Número</b>
						    <input class="numero" type="text" required>
                        </div>
                        <div>
                            <b>Bairro</b>
						    <input class="bairro" type="text" required>
                            <b>Cidade</b>
						    <input class="emailsenha" type="text" required>
                        </div>
                        <div>
                            <b>Estado</b>
						    <input class="estado" type="text" required>
                        </div>
					</div>
				</form>
				<div class="alterar">
                    <button>alterar</button>
				</div>
			</div>
		</div>
    </div>

    <div id="alterar_telefone">
		<div class="modalmenor_telefone" id="modalmenor_telefone">
			<div class="conteudo_modalmenor">
				<p class="fechar" onclick="document.getElementById('modalmenor_telefone').style.display='none'">x</p>
				<form>
					<div class="quadro_telefone">
                        <b>Pessoas</b>
					    <input class="emailsenha" type="text" placeholder="Insira o seu novo telefone" required>
                        <b>Residencial</b>
					    <input class="emailsenha" type="text" placeholder="Insira o seu novo telefone" required>
					</div>
				</form>
				<div class="alterar">
                    <button>alterar</button>
				</div>
			</div>
		</div>
    </div>
    `;

	container.innerHTML = template;

    return container;
}