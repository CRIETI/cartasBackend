const router = require('express').Router();
const CardModel = require('../models/Card');
const cardsController = require('../controllers/CardsController');

router.get('/cards', cardsController.index);
router.get('/cards/flip/:id', cardsController.flip);
router.get('/cards/flip', cardsController.flipAllFalse);
router.post('/cards', cardsController.create);

module.exports = router;
