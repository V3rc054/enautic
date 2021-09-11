const PDFDocument = require('pdfkit');
const fs = require('fs');

const declaracaoRes = {
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
doc.pipe(fs.createWriteStream(`Declaração de residência - ${declaracaoRes.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_declaracaoRes.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(declaracaoRes.nome, 110, 214)
  .text(declaracaoRes.cpfCnpj, 140, 231)
  .text(declaracaoRes.nacionalidade, 400, 231)
  .fontSize(09)
  .text(declaracaoRes.naturalidade, 165, 250)
  .text(declaracaoRes.uf_nascimento, 260, 250)
  .fontSize(11)
  .text(declaracaoRes.cidade, 130, 426)
  .text(declaracaoRes.endereco, 135, 372)
  .text(declaracaoRes.uf_endereco, 355, 426)
  .text(declaracaoRes.numero, 138, 399)
  .text(declaracaoRes.complemento, 270, 399)
  .text(declaracaoRes.bairro, 370, 399)
  .text(declaracaoRes.tel, 400, 249)
  .text(declaracaoRes.cel, 135, 265)
  .text(declaracaoRes.email, 310, 265)
  .text(declaracaoRes.cep, 420, 426)

  


doc.end()

module.exports = doc
