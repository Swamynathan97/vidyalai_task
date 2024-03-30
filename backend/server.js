const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./Db');
const {PDFDocument} = require('pdf-lib'); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/mergedPdf', express.static(__dirname + '/mergedPdf'))
app.use('/splitpdfs', express.static(__dirname + '/splitpdfs'))


const pdfRouter = require('./routes/pdfroutes')
app.use('/api/pdf', pdfRouter);


app.listen(process.env.PORT, () => console.log(`Server is running on the port ${process.env.PORT} `));