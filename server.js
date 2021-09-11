const app = require('./src/config/config-express');
const pdf = require('./src/config/config-pdf')

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
})

module.exports = app, pdf
