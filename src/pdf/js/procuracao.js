const PDFDocument = require('pdfkit');
const fs = require('fs');

const procuracao = {
  nome: 'André',
  cpfCnpj: '32922454860'
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Procuração - ${procuracao.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_procuracao.png', 0, 15,
  {
    width: 595.28,
    height: 841.49
  })

doc
  //DADOS PESSOAIS 
  .fontSize(11)
  .text(procuracao.nome, 120, 184)
  .text(procuracao.cpfCnpj, 110, 200)
 

  


doc.end()

module.exports = doc
