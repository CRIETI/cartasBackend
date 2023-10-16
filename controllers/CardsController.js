const { Op } = require('sequelize');
const CardModel = require('../models/Card');

class CardsController {

  index = async (req, res, next) => {
    const cards = await CardModel.findAll({
      order: [
        ['id', 'ASC'],
    ],
    });
    res.status(200).json(cards);
  }

  create = async (req, res, next) => {
    try {
      const card = await CardModel.create(req.body);
      res.json(card);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  flip = async (req, res) => {
    try {
      const id = req.params.id;
      const card = await CardModel.update(
        { flip: true }, {
        where: {
          id: id
        }
      });
      res.json(await CardModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  flipAllFalse = async (req, res) => {
    try {
      await CardModel.update(
        { flip: false }, {
        where: {
        }
      });

      res.json(await CardModel.findAll());
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


}

module.exports = new CardsController();
