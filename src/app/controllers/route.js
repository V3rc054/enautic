const db = require('../data/database')

module.exports = {
    index: (req, res) => {
        res.render('index',
            { title: 'e-nautic' })
    },
//Form Bsade
    formBsade: (req, res) => {
        res.render('form_bsade',
            { title: 'BSADE' })
    },

    formDeclacacao: (req, res) => {
        res.render('form_declaracaoRes',
            { title: 'Declaração de Residência' })
    },

    form_extravioNorman03: (req, res) => {
        res.render('form_extravioNorman03',
            { title: 'Extravio Norman03' })
    },

    form_reqArmador: (req, res) => {
        res.render('form_reqArmador',
            { title: 'Requerimento Amador' })
    },
    form_procuracao: (req, res) => {
        res.render('form_procuracao',
            { title: 'Procuração' })
    },
    form_extravioCHA: (req, res) => {
        res.render('form_extravioCHA',
            { title: 'Extravio CHA' })
    },

    selectFrom: (req, res) => {
        const sql = "SELECT * FROM cliente ORDER BY nome"
        db.query(sql, [], (err, result) => {
            if (err) {
                return console.error(err.message)
            }
            res.render('clientes', { model: result.rows, title: 'Tabela de clientes' })
        })
    },

    createGet: (req, res) => {
        res.render("form_novoCliente", { model: {}, title: "Novo cliente" })
    },

    createPost: (req, res) => {
        const sql = `INSERT INTO cliente (nome, datenascimento, nacionalidade, naturalidade, uf_nascimento, rgcnh,
             o_emissor, dateemissao, cpfcnpj, cep, endereco, numero, complemento, bairro, cidade, uf_endereco,
              cel, tel, email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`
        const cliente = [req.body.nome, req.body.datenascimento, req.body.nacionalidade, req.body.naturalidade,
        req.body.uf_nascimento, req.body.rgcnh, req.body.o_emissor, req.body.dateemissao, req.body.cpfcnpj,
        req.body.cep, req.body.endereco, req.body.numero, req.body.complemento, req.body.bairro, req.body.cidade,
        req.body.uf_endereco, req.body.cel, req.body.tel, req.body.email]
        db.query(sql, cliente, (err, result) => {
            if (err) {
                return console.error(err.message)
            }
            res.redirect("clientes")
        })
    },

    deleteGet: (req, res) => {
        const id = req.params.id
        const sql = "SELECT * FROM cliente WHERE cliente_id = $1"
        //const ordem = "SELECT book_id, title, author, comments, row_number() OVER (ORDER BY book_id) AS ordem FROM books;"
        db.query(sql, [id], (err, result) => {
            // if (err) ...
            res.render("form_deleteCliente", { model: result.rows[0] })
        })

    },

    deletePost: (req, res) => {
        const id = req.params.id
        const sql = "DELETE FROM cliente WHERE cliente_id = $1"
        db.query(sql, [id], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect("/clientes")
        })
    },

    editGet: (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM cliente WHERE cliente_id = $1`
        //const sql2 = `SELECT to_char("datenascimento", 'DD/MM/YYYY') FROM cliente;`
        db.query(sql,[id], (err, result) => {
            // if (err) ...
            res.render("form_editCliente", { model: result.rows[0] });
        })
    },

    // POST /edit/5
    editPost: (req, res) => {
        const id = req.params.id
        const cliente = [req.body.nome, req.body.datenascimento, req.body.nacionalidade, req.body.naturalidade,
        req.body.uf_nascimento, req.body.rgcnh, req.body.o_emissor, req.body.dateemissao, req.body.cpfcnpj,
        req.body.cep, req.body.endereco, req.body.numero, req.body.complemento, req.body.bairro, req.body.cidade,
        req.body.uf_endereco, req.body.cel, req.body.tel, req.body.email, id]
        const sql = `UPDATE cliente SET nome = $1, datenascimento = $2, nacionalidade = $3, naturalidade = $4, uf_nascimento = $5, rgcnh = $6,
             o_emissor = $7, dateemissao = $8, cpfcnpj = $9, cep = $10, endereco = $11, numero = $12, 
             complemento = $13, bairro = $14, cidade = $15, uf_endereco = $16, cel = $17, tel = $18, email = $19 WHERE (cliente_id = $20)`
        db.query(sql, cliente, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            res.redirect("/clientes")
        })
    }
}

