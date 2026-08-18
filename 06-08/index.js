import ArtigoEsportivoRepository from "./repositories/ArtigoEsportivoRepository.js"
import ArtigoEsportivoServices from "./services/ArtigoEsportivoServices.js";

//Ponto de entrada main()

const repository = new ArtigoEsportivoRepository();
const service = new ArtigoEsportivoServices(repository);
console.log("Iniciando Testes");

//1. Lista Iniciar

console.log("Lista Inicial", await service.listarTodos());

//2.Criar Artigo

const novoArtigo = await service.criar("Taco de Golfe","Wedges", 425.90)
console.log("Artigo Criado", novoArtigo);

//Buscar por ID
const busca = await service.buscarPorId(2);
console.log("Buscar ID", busca);

//4. Atualizar

const atualizado = await service.atualizar(1, {preco: 138.90});
console.log("Artigo Atualizado: " , atualizado);


//5. Remover

const removido = await service.remover(3);
console.log("Lista Final", await service.listarTodos);



