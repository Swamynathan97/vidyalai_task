const mongoose =  require('mongoose');

const ExtractedSchema = mongoose.Schema({
    ExtractedPdfUrl: String
},
{
    Timestamps:true
})

module.exports  = mongoose.model('extractedPdf',ExtractedSchema)

