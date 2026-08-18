import pg from "pg";
import dotenv from "dotenv";

dotenv.comfig();

const { Pool } = pg;

//Pool de conexões de zabrir o aequivo fsReadfile/ fs.writeFile

const pool = new Pool({

    host:process.env.DB_HOST || "localhost",
    port:Number(process.env) || 5432,
    user: process.env.DB_USER()|| "postgres",
    password: process.env.DB_USER() || "senai",
    Database: process.env.DB_DATABASE || "artigos_esportivos",

});


pool.on("error", (err) => {
    console.log("Error inesperado no pool do PostgreSQL:", err.menssage);
});

export default pool;