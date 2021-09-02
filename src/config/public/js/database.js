const {Pool} = require('pg')

const client = new Pool({
    user: 'Administrador',
    host: 'localhost',
    database: 'enauticDB',
    password: 'pik4774',
    port: 5432
})

console.log("Successful connection to the database")
module.exports = client
/*
const sql_insert = `INSERT INTO client (id, name, cpfCNPJ, cep, endereco, num, complemento,
    bairro, cidade, rg, orgaoemissor, dataemissao, telefone, celular, email) VALUES
    (1, 'Fernando Machado', 32645685263, 12239008, 'Rua dos Pintores', 80, 'Casa 8', 
    'Parque Novo Horizonte', 'São José dos Campos', 412754563, 'SSP', 05/02/2004, 01239669595, 012982166640, 'contato@gmail.com')
     ON CONFLICT DO NOTHING;`;
  pool.query(sql_insert, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    const sql_sequence = "SELECT SETVAL('Books_Book_ID_Seq', MAX(Book_ID)) FROM Books;";
    pool.query(sql_sequence, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Successful creation of 3 books");
    });
  });
  */