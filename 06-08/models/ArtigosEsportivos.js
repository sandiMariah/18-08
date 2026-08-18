class ArtigoEsportivo{

    constructor(id, nome, categoria, preco){
        this.id = id;
        this.noem = nome;
        this.categoria= categoria;
        this.preco = Number(preco);
    }

    formatarPreco(){
        return `R$ ${this.preco.tofixed(2)}`;
    }

    //Facilita converter um objeto "puro vem do JSON num instancia de classe

    static fromJson(obj){
        return new ArtigoEsportivo(obj.id, obj.nome, obj.categoria, obj.preco);
    }
}

export default ArtigoEsportivo;