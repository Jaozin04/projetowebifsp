-- MySQL Script generated by MySQL Workbench
-- Sat Jun 18 23:36:50 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

-- -----------------------------------------------------
-- Table `projetoweb`.`telefone`
-- -----------------------------------------------------
CREATE TABLE telefone (
    idtelefone INT NOT NULL AUTO_INCREMENT,
    pessoal INT(11) NOT NULL,
    residencial INT(11) NOT NULL,
    idcliente INT NOT NULL,
    idempresa INT NOT NULL,
    PRIMARY KEY (idtelefone),
    CONSTRAINT fk_telefone_cliente FOREIGN KEY (idcliente)
        REFERENCES cliente (idcliente),
    CONSTRAINT fk_telefone_empresa FOREIGN KEY (idempresa)
        REFERENCES empresa (idempresa))
ENGINE=INNODB;

-- -----------------------------------------------------
-- Table `projetoweb`.`empresa`
-- -----------------------------------------------------
CREATE TABLE empresa (
  idempresa INT NOT NULL AUTO_INCREMENT,
  cnpj INT NOT NULL,
  razao_social VARCHAR(200) NOT NULL,
  nome_fantasia VARCHAR(200) NOT NULL,
  idcliente INT NOT NULL,
  idendereco INT NOT NULL,
  idtelefone INT NOT NULL,
  PRIMARY KEY (idempresa),
  CONSTRAINT fk_empresa_cliente FOREIGN KEY (idcliente)
    REFERENCES cliente (idcliente),
  CONSTRAINT fk_empresa_endereco FOREIGN KEY (idendereco)
    REFERENCES endereco (idendereco),
  CONSTRAINT fk_empresa_telefone FOREIGN KEY (idtelefone)
    REFERENCES telefone (idtelefone))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE endereco (
  idendereco INT NOT NULL AUTO_INCREMENT,
  rua VARCHAR(200) NOT NULL,
  numero INT(10) NOT NULL,
  cidade VARCHAR(200) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  idcliente INT NOT NULL,
  idempresa INT NOT NULL,
  PRIMARY KEY (idendereco),
  CONSTRAINT fk_endereco_cliente FOREIGN KEY (idcliente)
    REFERENCES cliente (idcliente),
  CONSTRAINT fk_endereco_empresa FOREIGN KEY (idempresa)
    REFERENCES empresa (idempresa))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`ordemservico`
-- -----------------------------------------------------
CREATE TABLE ordemservico (
  idordemservico INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(45) NOT NULL,
  custo INT(10) NOT NULL,
  prazo VARCHAR(50) NOT NULL,
  descricao VARCHAR(140) NOT NULL,
  idcliente INT NOT NULL,
  idempresa INT NOT NULL,
  idservico VARCHAR(200) NOT NULL,
  PRIMARY KEY (idordemservico),
  CONSTRAINT fk_ordemservico_cliente FOREIGN KEY (idcliente)
    REFERENCES cliente (idcliente),
  CONSTRAINT fk_ordemservico_empresa FOREIGN KEY (idempresa)
    REFERENCES empresa (idempresa))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `projetoweb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE cliente (
  idcliente INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  cpf INT(11) NOT NULL,
  idendereco INT NOT NULL,
  idtelefone INT NOT NULL,
  idordemservico INT NOT NULL,
  PRIMARY KEY (idcliente),
  CONSTRAINT fk_cliente_endereco FOREIGN KEY (idendereco)
    REFERENCES endereco (idendereco),
  CONSTRAINT fk_cliente_telefone FOREIGN KEY (idtelefone)
    REFERENCES telefone (idtelefone),
  CONSTRAINT fk_cliente_ordemservico FOREIGN KEY (idordemservico)
    REFERENCES ordemservico (idordemservico))
ENGINE = InnoDB;

