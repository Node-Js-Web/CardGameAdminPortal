import { DataTypes, MEDIUMINT } from "sequelize";
import { sequelizeConnection } from "../connection.js";
import userModel from "./user.model.js";

const cardModel = sequelizeConnection.define(
  "Card",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack_points: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT('long'),
    }
  },
  {
    timestamps: true, // createdAt , updatedAt
  }
);

// hasMany  ( one to many )  user => card
// belongsTo (one to one)  card => user

userModel.hasMany(cardModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

cardModel.belongsTo(userModel);

export default cardModel;
