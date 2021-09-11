const PDFDocument = require('pdfkit');
const fs = require('fs');

const req_armador = {
  nome: 'André',
  cpfCnpj: '32922454860',
  nacionalidade: 'Brasileira',
  naturalidade: 'São José do Rio Preto',
  uf_nascimento: 'SP',
  endereco: 'Rua Benedita Nunes de Campos',
  uf_endereco: 'SP',
  numero: '700',
  complemento: 'apt 600',
  cidade: 'Sao Jose do Rio Preto',
  bairro: 'Parque Novo Horizonte',
  cep: '12239008',
  rgcnh: '412483623',
  tel: '01239669595',
  cel: '01239669595',
  email: 'contatovercosa@gmail.com',
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Req. Armador - ${req_armador.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_req_armador.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(req_armador.nome, 110, 214)
  .text(req_armador.cpfCnpj, 140, 231)
  .text(req_armador.nacionalidade, 400, 231)
  .fontSize(09)
  .text(req_armador.naturalidade, 165, 250)
  .text(req_armador.uf_nascimento, 260, 250)
  .fontSize(11)
  .text(req_armador.cidade, 130, 426)
  .text(req_armador.endereco, 135, 372)
  .text(req_armador.uf_endereco, 355, 426)
  .text(req_armador.numero, 138, 399)
  .text(req_armador.complemento, 270, 399)
  .text(req_armador.bairro, 370, 399)
  .text(req_armador.tel, 400, 249)
  .text(req_armador.cel, 135, 265)
  .text(req_armador.email, 310, 265)
  .text(req_armador.cep, 420, 426)

  


doc.end()

module.exports = doc
