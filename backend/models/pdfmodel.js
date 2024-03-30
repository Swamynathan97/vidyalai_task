const mongoose = require('mongoose')

const pdfSchema = new mongoose.Schema({
    path: String,
},
{
    timestamps:true
})

module.exports  = mongoose.model('originalPDF',pdfSchema)
