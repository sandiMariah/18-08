// import fs from "./fs/promises";
// import ArtigoEsportivo from "../models/ArtigoEsportivos.js";
// const CARRINHO_ARQUIVO = "./data/ArtigosEsortivos.json";

// //trabalhar os dados 

// class ArtigoEsportivoRepository {
//     async listarTodos(){
//         try{
//             const data= await fs.readFile(CARRINHO_ARQUIVO, "utf-8");
//             const bruto = JSON.parse(data);
//             return bruto.map(ArtigoEsportivo.JSON)


//         }

//         catch(error){
//             console.log("Erro ao ler o arquivo", error.mensage);
//             return[];
            
//         }
//     }

//     async salvarTodos(artigos){
//     try{
//         const data = JSON.stringify(artigos, null, 2);
//         await fs.writeFile(CARRINHO_ARQUIVO, data, "utf-8");

//     } 
    
//     catch(error){
//         console.error("Error ao escreve o arquivo", error.mensage);
//         return[];

//     } 
// }
// }

// export default ArtigoEsportivoRepository

import pool from "../config/database.js";
import ArtigosEsportivos from "..//models/artigosEsportivo.js";

class ArtigolsEsportivosRepository{
    async listarTodos(){
        try{
            const { row } = await pool.query(

                "SELECT id, nome, categoria, preco From artigos_esportivos ORDER BY id"
            );
            return  rows.map(ArtigolsEsportivo.fromJSON);

        }

        catch(error){
            console.log("Error ao ler o arquivo", error.mensagem);
            return[];
        }

    }

      async buscarporId(id){
        try{
            const { row } = await pool.query(

                "SELECT id, nome, categoria, preco From artigos_esportivos WHERE id = $1", [id]
            );
            return rows[0] ? ArtigolsEsportivo.fromJSON(rows[0]) : null;

        }

        catch(error){
            console.log("Error ao buscar por id", error.mensagem);
            return null;
        }

    }


     async criar(nome, categoria, preco) {
        try{
            const { row } = await pool.query(

                ` INSERT INTO artigos_esportivos (noem, categoria, preco 
                VALUES($1, $2, $3)
                
                RETURN id, nome, categoria, preco`,
            [nome,categoria,preco]
        );
                
            return ArtigolsEsportivo.fromJSON(rows[0]);

        }

        catch(error){
            console.log("Error ao criar o arquivo", error.mensagem);
            throw error;
        }

    }


   async delete(id) {
        try{
            const {rowCount} = await pool.query(
                "DELETE FROM artigos_esportivos WHERE id = $1",
                [id]
            );
         
             return rowCount > 0;

        }

        catch(error){
            console.log("Error ao delelter o arquivo", error.mensagem);
            throw error;
        }

}

}

export default ArtigoEsportivoRepository