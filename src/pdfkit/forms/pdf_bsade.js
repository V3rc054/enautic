const handlerbars = require('handlebars')
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument

const doc = new PDFDocument();
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream("Formulario_BSADE.pdf"));

// Embed a font, set the font size, and render some text
/*doc
  .font('./src/pdf/fonts/palatino-bold.ttf')
  .fontSize(18)
  .text('Nome: '+ nome,  100, 100)
 */

// Add an image, constrain it to a given size, and center it vertically and horizontally
/*doc.image('./src/pdf/img/image.png', {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
})
.font('./src/pdf/fonts/palatino-bold.ttf')
.fontSize(18)
.text('Nome: '+ nome,  100, 100)
*/
// Adicionando outra pagina
doc
  .addPage()
  .fontSize(25)
  .text( 100, 100);

// Draw a triangle
doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');

// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('blue', 'even-odd')
  .restore()
  .text(nome)

// Adicionando texto com anotaçoes
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');

// Finalizando arquivo PDF
doc.end();



const form_bsade = doc
module.exports = form_bsade