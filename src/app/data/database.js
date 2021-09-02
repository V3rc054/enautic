const { Pool } = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "enauticDB",
    password: "pik4774",
    port: 5432
})

console.log("Successful connection to the database")

module.exports = pool