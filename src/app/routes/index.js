const routes = require('express').Router();
const route = require('../controllers/route');

//routers forms
routes.get('/', route.index)
routes.get('/form_bsade', route.formBsade)
routes.get('/form_declaracaoRes', route.formDeclacacao)
routes.get('/form_extravioNorman03', route.form_extravioNorman03)
routes.get('/form_reqArmador', route.form_reqArmador)
routes.get('/form_procuracao', route.form_procuracao)
routes.get('/form_extravioCHA', route.form_extravioCHA)

//router database
routes.get('/clientes', route.selectFrom)
routes.get('/form_novoCliente', route.createGet)
routes.post('/form_novoCliente', route.createPost)
routes.post('/form_novoCliente', route.createPost)
routes.get("/form_deleteCliente/:id", route.deleteGet)
routes.post("/form_deleteCliente/:id", route.deletePost)
routes.get("/form_editCliente/:id", route.editGet)
routes.post("/form_editCliente/:id", route.editPost)



module.exports = routes
