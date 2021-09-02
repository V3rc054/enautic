const app = require('./src/config/config-express');


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
})

module.exports = app
