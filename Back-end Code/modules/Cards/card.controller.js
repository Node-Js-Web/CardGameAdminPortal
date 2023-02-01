import { Op } from "sequelize";
import cardModel from "../../DB/models/card.model.js";

export const addcard = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const card = await cardModel.create(req.body);
    if (card) {
      res.json({ message: "Added Done", card });
    } else {
      res.json({ message: "Added Fail" });
    }
  } catch (error) {
    res.json({ message: "Catch error", error: error });
  }
};

export const getcards = async (req, res) => {
  try {
    const cards = await cardModel.findAll({}); // [{},{}] , []
    if (cards.length) {
      res.json({ message: "Done", cards });
    } else {
      res.json({ message: "there are no cards", cards });
    }
  } catch (error) {
    res.json({ message: "Catch error", error: error });
  }
};

export const getProdById = async (req, res) => {
  try {
    const card = await cardModel.findOne({
      where: {
        [Op.and]: {
          id: req.params.id,
          UserId: req.params.UserId,
        },
      },
    });
    if (card) {
      res.json({ message: "Done", card });
    } else {
      res.json({ message: "there are no card" });
    }
  } catch (error) {
    res.json({ message: "catch error" });
  }
};



export const deletecard = async (req, res) => {
  try {
    // prodctId , UserId
    const { prodId, UserId } = req.params;
    const deletedcard = await cardModel.destroy({
      where: {
        // prodId , UserId
        [Op.and]: {
          id: prodId,
          UserId,
        },
      },
    });
    console.log(deletedcard);
    if (deletedcard) {
      res.json({ message: "Deleted Done" });
    } else {
      res.json({ message: "Deleted Fail" });
    }
  } catch (error) {
    res.json({ message: "catch error", error });
  }
};

export const updatecard = async (req, res) => {
  try {
    const { prodId, UserId } = req.params;
    const { title, attack_points, description, image } = req.body;
    const card = await cardModel.update(
      { title, attack_points, description, image },
      {
        where: {
          [Op.and]: {
            id: prodId,
            UserId,
          },
        },
      }
    );
    console.log(card);
    if (card[0]) {
      res.json({ message: "Done" });
    } else {
      res.json({ message: "Fail" });
    }
  } catch (error) {
    res.json({ message: "Catch error" });
  }
};
