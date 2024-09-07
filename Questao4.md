### Estado

| estado_id (PK) | sigla | nome   |
|----------------|-------|--------|
| integer        | char  | string |

### Cliente

| cliente_id (PK) | razao_social | estado_id (FK) |
|-----------------|--------------|----------------|
| integer         | string       | integer        |

### Telefone

| telefone_id (PK) | numero | tipo_telefone_id (FK) | cliente_id (FK) |
|------------------|--------|-----------------------|-----------------|
| integer          | string | integer               | integer         |

### TipoTelefone

| tipo_telefone_id (PK) | descricao |
|-----------------------|-----------|
| integer               | string    |



-- Criação da tabela Estado
CREATE TABLE Estado (
    estado_id INT AUTO_INCREMENT PRIMARY KEY,
    sigla VARCHAR(2) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL
);

-- Criação da tabela TipoTelefone
CREATE TABLE TipoTelefone (
    tipo_telefone_id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);

-- Criação da tabela Cliente
CREATE TABLE Cliente (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    estado_id INT,
    FOREIGN KEY (estado_id) REFERENCES Estado(estado_id)
);

-- Criação da tabela Telefone
CREATE TABLE Telefone (
    telefone_id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(20) NOT NULL,
    tipo_telefone_id INT,
    cliente_id INT,
    FOREIGN KEY (tipo_telefone_id) REFERENCES TipoTelefone(tipo_telefone_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id)
);



SELECT
    c.cliente_id AS codigo,
    c.razao_social,
    t.numero AS telefone
FROM
    Cliente c
JOIN
    Estado e ON c.estado_id = e.estado_id
JOIN
    Telefone t ON c.cliente_id = t.cliente_id
WHERE
    e.sigla = 'SP';
