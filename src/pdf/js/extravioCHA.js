const PDFDocument = require('pdfkit');
const fs = require('fs');

const extravioCHA = {
    nome: 'André Luiz Verçosa',
    endereco: 'Rua Benedita Nunes de Campos',
    cidade: 'Sao Jose do Rio Preto',
    uf_endereco:'SP',
    bairro: 'Parque Novo Horizonte',
    cep: '12239008',
    rgcnh: '412483623',
    o_emissor: 'SSP',
    dateEmissao: '10/10/2005',
    cpfCnpj: '32922454860',
    tel: '01239669595',
    cel: '01239669595',
    email: 'contatovercosa@gmail.com',
    numCHA: '000000000000',
    dateEmissaoCha: '000022223233',
    categoria: '1212122121212',
    numero: '4500',
    complemento: 'Casa 8',
}

//CRIA O DOCUMENTO
const doc = new PDFDocument({ size: 'A4' });

//SALVA O DOCUMENTO
doc.pipe(fs.createWriteStream(`Extravio CHA - ${extravioCHA.nome}.pdf`));

//IMG MODEL
doc.image('./src/pdf/img/img_extravioCHA.png', 0, 15,
    {
        width: 595.28,
        height: 841.49
    })

doc
    //DADOS PESSOAIS DO REQUERENTE
    .fontSize(11)
    .text(extravioCHA.nome, 100, 119)
    .text(extravioCHA.endereco, 350, 161)
    .fontSize(08)
    .text(extravioCHA.cidade, 445, 186,{lineBreak: false})
    .text(extravioCHA.uf_endereco, 535, 186,{lineBreak: false})
    .fontSize(11)
    .text(extravioCHA.bairro, 209, 183)
    .text(extravioCHA.cep, 330, 183)
    .text(extravioCHA.rgcnh, 150, 140)
    .text(extravioCHA.o_emissor, 275, 140)
    .text(extravioCHA.dateEmissao, 430, 139)
    .text(extravioCHA.cpfCnpj, 80, 161)
    //.text(extravioCHA.tel, 260, 287)
    .text(extravioCHA.cha, 435, 287)
    //.text(extravioCHA.dateEmissaoCha, 95, 305)
   // .text(extravioCHA.categoria, 95, 305)
    .text(extravioCHA.tel, 130, 228)
    .text(extravioCHA.numCHA, 130, 250)
    .text(extravioCHA.dateEmissaoCha, 355, 250)
    .text(extravioCHA.categoria, 95, 270)
    .text(extravioCHA.numero, 80, 183)
    .text(extravioCHA.complemento, 120, 183)

    


doc.end()

module.exports = doc
