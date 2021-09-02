const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const routes = require('../app/routes/index')


app.engine('handlebars', handlebars({ defaulLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: false }))

app.use('/', routes);
app.use(express.static(path.join(__dirname, '/public')))



module.exports = app

