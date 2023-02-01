/**
 * methode , url
 * data
 * logic
 */

import { Op } from "sequelize";
import userModel from "../../DB/models/user.model.js";

export const getUser = async (req, res) => {
  try {
    // const users = await userModel.findAll({});
    const { id } = req.body;
    const user = await userModel.findOne({
      where: {
        id,
      },
    });
    if (user) {
      res.json({ message: "Done", Users: user });
    } else {
      res.json({ message: "invalid id" });
    }
  } catch (error) {
    res.json({ message: "Fail", error: error });
  }
};

export const addUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    console.log({ user });
    res.json({ message: "Added Done", user });
  } catch (error) {
    res.json({ message: "Catch err", error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      where: {
        // [Op.and]: {
        //   email,
        //   password,
        // },
        email , password
      },
    }); // object , null 
    if (user) {
      res.json({ message: "Login Success", user });
    } else {
      res.json({ message: "Invalid login information" });
    }
  } catch (error) {
    res.json({ message: "catch error", error: error });
  }
};
