import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../connection.js";

const userModel = sequelizeConnection.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
  }
},{
   timestamps:true    // createdAt , updatedAt
});


export default userModel
