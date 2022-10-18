
const asyncHandler = require('express-async-handler')
const Facture = require('../models/facture')
const mailer = require('../utils/mailer');


const addFacture = asyncHandler(async (req, res) => {
    const { total, dateFacture , userMail} = req.body

    const facture = await Facture.create(
        {
            total: total,
            dateFacture: dateFacture,
           // products:products,
        }
    )
    mailer.sendVerifyMail(userMail,facture.toString());

    res.send(facture)
    })


const getAllFactures = async (req, res) => {
    //res.json("test")
    Facture.find({}, function (err, facture) {
        res.send(facture)
    });

}

const deleteFacture = async (req, res) => {
    id = req.params.id; 
    console.log(id)
    Facture.findByIdAndDelete(id, (err, data) => {
        res.status(200).json({ message: 'facture deleteed' })

    });
}

const updateFacture = async (req, res, next) => {
    console.log(req.body)
    const updatedFacture = await Facture.findByIdAndUpdate(req.params.id, req.body, {});

    res.status(200).json({
        status: 'success',
        data: {
            facture: updatedFacture,
        },
    });
};






module.exports = {
    addFacture,
    getAllFactures,
    deleteFacture,
    updateFacture
}