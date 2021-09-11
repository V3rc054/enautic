const PDFDocument = require('pdfkit');
const fs = require('fs');

const recibo = {
  nome: 'André',
  cpfCnpj: '32922454860',
  valor: '500,00',
  servico: 'Documentação'
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Recibo - ${recibo.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_recibo.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(recibo.nome, 180, 171)
  .text(recibo.cpfCnpj, 255, )
  .text(recibo.valor, 170, 199 )
  .text(recibo.servico, 120, 226)
 

  


doc.end()

module.exports = doc
