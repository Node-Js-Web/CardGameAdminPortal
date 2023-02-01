import { Sequelize } from "sequelize";


export const sequelizeConnection = new Sequelize('LogIn', 'root', '',{
  host:'localhost',
  dialect:'mysql'
})


export const connectionDb  = async ()=>{
  return await
   sequelizeConnection.sync({alter:true , force:false})
  .then(res => console.log("DB connected................."))
  .catch(err => console.log({message:"Connected fail", err:err}))
}