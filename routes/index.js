const cors = require('cors');
const router = require('express').Router();
const cards = require('./cards');

router.use(cors());

router.use(cards);
// router.use(states);


module.exports = router;
