const express = require('express')
const router = express.Router()
const {
    addFacture, getAllFactures, updateFacture,deleteFacture
} = require('../controllers/factureController')

router.post('/', addFacture)
router.get('/', getAllFactures)
router.delete('/:id', deleteFacture)

router.put('/updateFacture/:id', updateFacture)


module.exports = router