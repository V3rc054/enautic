const PDFDocument = require('pdfkit');
const fs = require('fs');

const extravioNorman03 = {
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
  o_emissor: 'SSP',
  tel: '01239669595',
  cel: '01239669595',
  email: 'contatovercosa@gmail.com',
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Extravio Norman03 - ${extravioNorman03.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_extravioNorman03.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(extravioNorman03.nome, 110, 199)
  .text(extravioNorman03.rgcnh, 155, 226)
  .text(extravioNorman03.o_emissor, 305, 226)
  .text(extravioNorman03.nacionalidade, 155, 253)
  .text(extravioNorman03.cpfCnpj, 410, 226)
  .fontSize(09)
  .text(extravioNorman03.naturalidade, 340, 255)
  .text(extravioNorman03.uf_nascimento, 440, 255)
  .fontSize(11)
  .text(extravioNorman03.endereco, 135, 372)
  .text(extravioNorman03.uf_endereco, 355, 426)
  .text(extravioNorman03.tel, 390, 281)
  .text(extravioNorman03.cel, 195, 281)
  .text(extravioNorman03.email, 130, 309)
  

  


doc.end()

module.exports = doc
