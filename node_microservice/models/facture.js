var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Facture = new Schema(
    {
        dateFacture:String,
        user: String,
        userMail: String,
        total: Number,
        products: [{
            product: String
        }],
      
    }
);


module.exports = mongoose.model("factures", Facture);