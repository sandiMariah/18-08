CREATE TABLE IF NOT EXISTS artigos_esportivos(

    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL
);


--------DADO inicial equivalente ao que estava em artigosEsportivos.json
INSERT  INTO artigos_esportivos (nome,categoria,preco)
VALUES ("Bola de futebol Nike", "Bola", "39.90")
ON CONFLICTE DO NOTHING;