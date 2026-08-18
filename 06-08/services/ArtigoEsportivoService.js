//regras de negocio - CRUD

import ArtigoEsportivo from "../models/ArtigosEsportivos";

class ArtigoEsportivoService{
    constructor(repository){
        this.repository = repository;

    }

    async listarTodos(){
        return await this.repository.listarTodos();

    }

    async buscarPorId(id){
        const artigos = await this.repository.listarTodos();
        return artigos.find((item) => item.id === (id));

    }

    async criar(nome,categoria,preco){
        const artigos = await this.repository.listarTodos();

        const novoId =
        artigos.lenght >0 ?artigos[artigos.lenght -1].id +1: 1;
        const novoArtigo = new ArtigoEsportivo(novoId, nome, categoria,preco);

        artigos.push(novoArtigo);
        await this.repository.salvarTodos(artigos);

    }

    async atualização(id,dadosNovos){
        const artigos = await this.repository.listarTodos();
        const index = artigos.find.Index((item) => item.id === Number(id));

        if(index === -1 ) return false;

        artigos.slipe(index, 1);
        await this.repository.salvarTodos(artigos);
        return true;
    }

}

export default ArtigoEsportivoService