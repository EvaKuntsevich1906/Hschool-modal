const {
    pool
} = require("../db");

const createUserDB = async (name, email, password) => {
    try {
        await client.query('BEGIN');
        const client = await pool.connect();
        register
        const sqlInfo = `
            INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3) RETURNING users.*
            `;

        const objInsert = (await client.query((sqlInfo, [name, email, password]))).rows;
        if (!objInsert.length) throw new Error("Некорректный ввод");

        await client.query('COMMIT');

        return objInsert;
    } catch (err) {
        console.log(`error in usercreateDB`);
        await client.query('ROLLBACK')
    }
}
module.exports = {
    createUserDB
}